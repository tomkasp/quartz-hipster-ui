'use strict';

angular.module('quartzuiApp')
    .controller('SchedulerDetailController', function ($scope, $stateParams, Scheduler) {
        $scope.scheduler = {};
        $scope.load = function (id) {
            Scheduler.get({id: id}, function(result) {
              $scope.scheduler = result;
            });
        };
        $scope.load($stateParams.id);
    });
