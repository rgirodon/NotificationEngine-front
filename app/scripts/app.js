define([
    'underscore',
    'backbone',
    'marionette'

], function (_, Backbone) {

    var App = new Backbone.Marionette.Application();

    App.addRegions({
        content: '.container > .row',
        counts: '#counts',
        topics: '#topics',
        charts: '#charts',
        topicStats: '#topic-stats'
    });

    return App;

});