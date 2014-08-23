'use strict';

define([
    'models/app',
    'collections/apps',
    'views/app'
], function( AppModel, AppCollection, AppView ) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'showHome'
        },

        initialize: function() {
            // ...
        },

        showHome: function() {
            // ...
        }
    });

    return AppRouter;
});
