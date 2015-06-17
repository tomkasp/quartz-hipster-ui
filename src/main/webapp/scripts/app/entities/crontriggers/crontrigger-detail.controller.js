'use strict';

angular.module('quartzuiApp')
    .controller('CrontriggerDetailController', function ($scope, $stateParams, Crontrigger) {
        $scope.crontrigger = {};
        $scope.load = function (scheduler, triggergoup, triggername) {
            Crontrigger.get({scheduler:scheduler, triggername:triggername, triggergroup:triggergoup}, function(result) {
                console.log(result)
                $scope.crontrigger = result;
            });
        };
        $scope.load($stateParams.scheduler, $stateParams.triggergroup, $stateParams.triggername);
    });
