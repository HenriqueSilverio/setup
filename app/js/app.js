'use strict';

define([
    'marionette'
], function( Marionette ) {
    var MyApp = new Marionette.Application();

    MyApp.navigate = function( route, options ) {
        options = options || {};
        Backbone.history.navigate( route, options );
    };

    MyApp.getCurrentRoute = function() {
        return Backbone.history.fragment;
    };

    MyApp.on('start', function() {
        if( Backbone.history ) {
            require([
                'modules/hello/main'
            ], function( HelloApp ) {
                Backbone.history.start();

                if( MyApp.getCurrentRoute() === '' ) {
                    MyApp.trigger( 'hello:show' );
                }
            });
        }
    });

    return MyApp;
});
