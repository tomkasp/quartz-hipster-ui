'use strict';

angular.module('quartzuiApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('scheduler', {
                parent: 'entity',
                url: '/scheduler',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'quartzuiApp.scheduler.home.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/scheduler/schedulers.html',
                        controller: 'SchedulerController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('scheduler');
                        return $translate.refresh();
                    }]
                }
            })
    });
