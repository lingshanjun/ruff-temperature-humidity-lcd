'use strict';

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }


    $('#lcd').turnOn(function () {
        $('#lcd').clear();

        console.log("LCD turns on");
        $('#lcd').setCursor(0, 0);
        $('#lcd').print('Welcome!');

    });
    setInterval(function () {

        $('#humirature').getTemperature(function (error, temperature) {
            if (error) {
                console.error(error);
                return;
            }

            console.log('temperature', temperature);
            $('#lcd').setCursor(0, 0);
            $('#lcd').print('temperature: ' + temperature + 'C');
        });

        $('#humirature').getRelativeHumidity(function (error, humidity) {
            if (error) {
                console.error(error);
                return;
            }

            console.log('humidity', humidity);
            $('#lcd').setCursor(0, 1);
            $('#lcd').print('humidity: ' + humidity + '%');
        });

    }, 1000);
});

$.end(function () {
    $('#lcd').turnOff(function () {
        console.log("LCD turns off");
    });
});