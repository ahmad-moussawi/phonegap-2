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