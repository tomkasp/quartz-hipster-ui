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
            });
    });
