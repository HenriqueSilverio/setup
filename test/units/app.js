define( [
    'jquery',
    'underscore',
    'backbone',
    'models/app'
], function( $, _, Backbone, AppModel ) {
    QUnit.module( 'App Model' );

    QUnit.test( 'Model validations', function( assert ) {
        assert.equal( false, false, 'False is false.' );
    } );
} );
