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
            .state('schedulerDetail', {
                parent: 'entity',
                url: '/scheduler/:id',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'quartzuiApp.scheduler.detail.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/scheduler/scheduler-detail.html',
                        controller: 'SchedulerDetailController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('scheduler');
                        return $translate.refresh();
                    }]
                }
            });
    });
