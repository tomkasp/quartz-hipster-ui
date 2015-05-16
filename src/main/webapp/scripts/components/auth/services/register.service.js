'use strict';

angular.module('quartzuiApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


