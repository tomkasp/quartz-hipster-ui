'use strict';

angular.module('quartzuiApp')
    .controller('CrontriggerDetailController', function ($scope, $stateParams, Crontrigger) {
        $scope.crontrigger = {};
        $scope.load = function (id) {
            Crontrigger.get({id: id}, function(result) {
                $scope.crontrigger = result;
            });
        };
        $scope.load($stateParams.id);
    });
