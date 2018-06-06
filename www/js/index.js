document.addEventListener('deviceready', function () {

    // make sure to bootstrap your application code inside 'deviceready' event
    // at this point we are sure that the phonegap API are ready to use

    // load the burger menu from the remote json endpoint
    $.get('http://formatech.vivida-apps.com/burgerapp/menu', function (result) {

        // update the tab badge
        $('[page="menu.html"]').attr('badge', result.length)

        result.forEach(function (menuItem) {

            var template = `<ons-list-item>
                    <div class="left">
                        <img class="list-item__thumbnail" src="${menuItem.image}">
                    </div>
                    <div class="center">
                        <span class="list-item__title">${menuItem.name}</span>
                        <span class="list-item__subtitle">Price: ${menuItem.price}</span>
                    </div>
                </ons-list-item>`;

            $('#menu-list').append(template);

        })

    })


    // Plugins Native API

    // handling battery status
    // check https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-battery-status/index.html for details about this plugin
    function onBatteryStatus(status) {

        $('.battery-status-level').css('width', status.level + '%');

        if (status.isPlugged) {
            $('.battery-status-level').addClass('plugged')
        } else {
            $('.battery-status-level').removeClass('plugged')
        }

        console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
    }

    window.addEventListener("batterystatus", onBatteryStatus, false);



    // Capturing images from the camera
    // check https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-camera/index.html for details about this plugin
    function cameraSuccess(imageData) {
        $('.camera-image')
            .attr('src', "data:image/jpeg;base64," + imageData);
    }

    function cameraError(error) {
        console.log(error)
        alert('3a chu kheyif 🤢');
    }

    $('#openCamera').click(function () {
        navigator.camera.getPicture(cameraSuccess, cameraError, {
            quality: 20,
            destinationType: Camera.DestinationType.DATA_URL
        });

    })

    // Location Plugin
    // check https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-geolocation/index.html for details about this plugin
    function onPositionSuccess(position) {

        $('#location_lat span').html(position.coords.latitude);
        $('#location_lng span').html(position.coords.longitude);

        console.log('Latitude: ' + position.coords.latitude + '\n' +
            'Longitude: ' + position.coords.longitude + '\n' +
            'Altitude: ' + position.coords.altitude + '\n' +
            'Accuracy: ' + position.coords.accuracy + '\n' +
            'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
            'Heading: ' + position.coords.heading + '\n' +
            'Speed: ' + position.coords.speed + '\n' +
            'Timestamp: ' + position.timestamp + '\n');
    }

    function onPositionError(err) {
        alert('failed to get your position');
    }

    $('#refreshLocation').click(function () {
        navigator.geolocation.getCurrentPosition(onPositionSuccess, onPositionError)
    })


}, false);