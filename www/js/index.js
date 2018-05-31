var session = {
    burgers: [
        {
            name: 'Cheese Burger',
            image: 'b1.jpg',
            price: 5000,
        },
        {
            name: 'Fish Burger',
            image: 'b2.jpg',
            price: 5500,
        },
        {
            name: 'Fish Burger',
            image: 'b2.jpg',
            price: 7500,
        },
        {
            name: 'Burger 2',
            image: 'b3.jpg',
            price: 8000,
        },
        {
            name: 'Double Burger',
            image: 'b4.jpg',
            price: 3500,
        },
        {
            name: 'Mac Burger',
            image: 'b5.jpg',
            price: 4500,
        },
    ],
    kebbe: [
        {
            name: 'Kebbe 1',
            image: 'kebbe1.jpg',
            price: 'ya balesh',
        },
        {
            name: 'Kebbe 2',
            image: 'kebbe2.jpg',
            price: 'ya balesh',
        },
        {
            name: 'Kebbe 3',
            image: 'kebbe3.jpg',
            price: 'ya balesh',
        },
    ]
};

document.addEventListener('deviceready', function () {

    // make sure to bootstrap your application code inside 'deviceready' event
    // at this point we are sure that the phonegap API are ready to use

    for (var i = 0; i < 10; i++) {

        var cssClass = '';

        // use console.log to print messages to the console,
        // useful for debugging
        console.log(i);

        if (i === 5) {
            cssClass = 'red';
        } else {
            console.log('i != 5');
        }

        var text = '';
        for (var j = 0; j < i; j++) {
            text += '🍔';
        }

        $('#burgers').append('<div class="' + cssClass + '">' + text + '</div>');
    }

}, false);