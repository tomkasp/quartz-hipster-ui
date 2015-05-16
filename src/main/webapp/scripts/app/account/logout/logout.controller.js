'use strict';

angular.module('quartzuiApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
