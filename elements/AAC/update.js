function(instance, properties, context) {

    if (typeof instance.data.ready === 'boolean') {

        if (instance.data.ready) {

            instance.data.start({
                title: properties['title'],
                content: properties['content'],
                box_style: properties['box_style'],
                title_style: properties['title_style'],
                content_style: properties['content_style'],
                follow: properties['follow'],
            })
        }
    }
}