'use strict';

angular.module('quartzuiApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('crontrigger', {
                parent: 'entity',
                url: '/crontrigger',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'quartzuiApp.crontrigger.home.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/crontriggers/crontrigger.html',
                        controller: 'CrontriggerController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('crontrigger');
                        return $translate.refresh();
                    }]
                }
            })
            .state('cronDetail', {
                parent: 'entity',
                url: '/cron/:scheduler/:triggergroup/:triggername',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'quartzuiApp.scheduler.detail.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/scheduler/scheduler-detail.html',
                        controller: 'CrontriggerDetailController'
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
