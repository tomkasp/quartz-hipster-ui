'use strict';

angular.module('quartzuiApp')
    .factory('Crontrigger', function ($resource) {
        return $resource('quartz/triggers/cron/:scheduler/:triggergroup/:triggername', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    });


