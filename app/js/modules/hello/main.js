// File: js/modules/hello/main.js

'use strict';

define( [
    'app'
], function( MyApp ) {
    var HelloApp = {
        Router: Marionette.AppRouter.extend({
            appRoutes: {
                'hello': 'sayHello'
            }
        })
    };

    var API = {
        sayHello: function() {
            require([
                'modules/hello/show/controller'
            ], function( ShowController ) {
                ShowController.sayHello();
            });
        }
    };

    MyApp.on('hello:show', function() {
        MyApp.navigate( 'hello' );
        API.sayHello();
    });

    MyApp.addInitializer(function() {
        return new HelloApp.Router({
            controller: API
        });
    });

    return HelloApp;
} );
