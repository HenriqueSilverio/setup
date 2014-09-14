'use strict';

requirejs.config({
    paths: {
        jquery      : 'libs/jquery.min',
        underscore  : 'libs/underscore.min',
        handlebars  : 'libs/handlebars.runtime.min',
        backbone    : 'libs/backbone.min',
        marionette  : 'libs/backbone.marionette.min',
        localstorage: 'libs/backbone.localStorage.min',
        appTemplates: 'templates/templates',
        helpers     : 'templates/helpers/helpers'
    },

    shim: {
        handlebars: {
            exports: 'Handlebars'
        }
    }
});
