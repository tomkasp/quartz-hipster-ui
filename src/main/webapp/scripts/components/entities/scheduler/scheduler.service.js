'use strict';

angular.module('quartzuiApp')
    .factory('Scheduler', function ($resource) {
        return $resource('quartz/schedulers/:id', {}, {
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


