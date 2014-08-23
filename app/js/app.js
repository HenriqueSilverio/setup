'use strict';

define( [
    'router'
], function( AppRouter ) {
    var init = function() {
        var appRouter = new AppRouter();
        Backbone.history.start();
    };

    return {
        init: init
    };
} );
