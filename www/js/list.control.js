$('list').each(function() {

    var $list = $(this);

    $list.addClass('burger-list')

    // <burger-list data-src=""></burger-list>
    // $list.data('src') => 'burgers'
    // session['burgers'] => [{},{}]
    var data = session[$list.data('src')];

    data.forEach(function (item) {

        var $item = $(`<div class="item">
            <img src="/img/${item.image}" />
            <h2 class="name">${item.name}</h2>
            <small class="price">${item.price}</small>
        </div>`);

        $item.on('click', function () {
            $item.toggleClass('active');
        });

        $list.append($item);
    });

})