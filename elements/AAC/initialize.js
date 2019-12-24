function(instance, context) {

    function makeid(length) {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;

        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    instance.data.start = function (obj) {

        instance.data['box_style_1'] = 'z-index: -100; visibility: hidden; position:absolute;';
        instance.data['box_style_2'] = obj['box_style'];

        let title = obj['title'] ? `<div style='${obj['title_style']}'>${obj['title']}</div>` : '';
        let content = obj['content'] ? `<div style='${obj['content_style']}'>${obj['content']}</div>` : '';

        let box_id = makeid(5);
        let box = `<div id='${box_id}' style='${instance.data['box_style_1']}${instance.data['box_style_2']}'>${title}${content}</div>`;

        if (!instance.data['box']) {

            instance.data['box'] = box;

            instance.data['box_id'] = box_id;
            $('body').append(instance.data['box'])
        } else {

            $(`#${instance.data['box_id']}`).remove();

            instance.data['box'] = box;

            instance.data['box_id'] = box_id;
            $('body').append(instance.data['box'])
        }


        if (obj['follow'] === true) {

            $(document).on('mousemove', function (e) {

                $(`#${instance.data['box_id']}`).css({
                    left: e.pageX,
                    top: e.pageY,
                    visibility: 'visible',
                    zIndex: 10000
                })
            });
        }

        if (obj['follow'] === false) {

            $(document).off('mousemove');

            $(`#${instance.data['box_id']}`).css({
                left: 0,
                top: 0,
                visibility: 'hidden',
                zIndex: -100
            });
        }


    };

    instance.data.ready = true;

}