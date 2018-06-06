document.addEventListener('init', function (event) {
    var page = event.target;

    if (page.id === 'control') {

        // usage: <list data-src="source" data-title="title"></list>
        $('list').each(function () {

            var $list = $(this);

            // <burger-list data-src=""></burger-list>
            // $list.data('src') => 'burgers'
            // session['burgers'] => [{},{}]
            var data = session[$list.data('src')];
            var title = $list.data('title');

            $list.append(
                `<ons-list class="custom-list">
                    <ons-list-header>${title}</ons-list-header>
                    <!-- items will be added here -->
                </ons-list>`
            );


            data.forEach(function (item) {


                var template = `<ons-list-item>
                    <div class="left">
                        <img class="list-item__thumbnail" src="${item.image}">
                    </div>
                    <div class="center">
                        <span class="list-item__title">${item.name}</span>
                        <span class="list-item__subtitle">Price: ${item.price}</span>
                    </div>
                </ons-list-item>`;


                $list.find('ons-list').append(template);
            });

        });

    }
});
