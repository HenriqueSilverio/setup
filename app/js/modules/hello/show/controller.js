// File: modules/hello/show/controller

'use strict';

define([
    'app',
    'modules/hello/show/view'
], function( MyApp, ShowView ) {
    var ShowController = Marionette.Controller.extend({
        sayHello: function() {
            var helloView = new ShowView();

            $( 'body' ).append( helloView.render().el );
        }
    });

    return new ShowController();
});
