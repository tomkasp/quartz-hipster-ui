'use strict';

angular.module('quartzuiApp')
    .factory('SchedulerSearch', function ($resource) {
        return $resource('api/_search/authors/:query', {}, {
            'query': { method: 'GET', isArray: true}
        });
    });
