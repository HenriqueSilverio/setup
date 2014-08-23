'use strict';

require( [ '../app/js/config' ], function() {
    requirejs.config({
        baseUrl: '../app/js',
        urlArgs: 'now=' + Date.now(),
        paths: {
            units: '../test/units'
        }
    });
} );
