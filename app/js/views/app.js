'use strict';

define([
    'collections/apps',
    'appTemplates'
], function( AppCollection, Templates ) {
    var AppView = Backbone.View.extend({
        template: Templates['app'],

        initialize: function() {
            this.render();
        },

        render: function() {
            this.$el.html( this.template( this.model.toJSON() ) );
            return this;
        }
    });

    return AppView;
});
