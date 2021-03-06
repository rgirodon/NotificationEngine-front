define([
    'underscore',
    'backbone',
    'marionette',
    'templates'

], function (_, Backbone) {

    var TopicStatsLayout = Backbone.Marionette.Layout.extend({

        template: 'topic-stats-layout',

        regions: {
            search: '#topic-search',
            results: '#topic-results',
            charts: '#topic-charts'
        }

    });

    return TopicStatsLayout;


});