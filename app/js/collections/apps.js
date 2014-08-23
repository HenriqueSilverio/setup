'use strict';

define( [
    'models/app'
], function( AppModel ) {
    var AppCollection = Backbone.Collection.extend({
        model: AppModel
    });

    return AppCollection;
} );
