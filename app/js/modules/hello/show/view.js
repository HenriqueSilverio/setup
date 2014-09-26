// File: modules/hello/show/view

'use strict';

define([
    'marionette',
    'appTemplates'
], function( Marionette, Templates ) {
    var ShowView = Marionette.ItemView.extend({
        template: Templates['hello/show/hello']
    });

    return ShowView;
});
