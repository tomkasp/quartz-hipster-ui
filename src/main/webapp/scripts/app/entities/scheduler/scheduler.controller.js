'use strict';

angular.module('quartzuiApp')
    .controller('SchedulerController', function ($scope, Scheduler, AuthorSearch) {
        $scope.schedulers = [];
        $scope.loadAll = function() {
            Scheduler.query(function(result) {
               $scope.schedulers = result;
            });
        };
        $scope.loadAll();

        $scope.showUpdate = function (id) {
            //Author.get({id: id}, function(result) {
            //    $scope.author = result;
            //    $('#saveAuthorModal').modal('show');
            //});
        };

        $scope.save = function () {
            //if ($scope.author.id != null) {
            //    Author.update($scope.author,
            //        function () {
            //            $scope.refresh();
            //        });
            //} else {
            //    Author.save($scope.author,
            //        function () {
            //            $scope.refresh();
            //        });
            //}
        };

        $scope.delete = function (id) {
            //Author.get({id: id}, function(result) {
            //    $scope.author = result;
            //    $('#deleteAuthorConfirmation').modal('show');
            //});
        };

        $scope.confirmDelete = function (id) {
            //Author.delete({id: id},
            //    function () {
            //        $scope.loadAll();
            //        $('#deleteAuthorConfirmation').modal('hide');
            //        $scope.clear();
            //    });
        };

        $scope.search = function () {
            //AuthorSearch.query({query: $scope.searchQuery}, function(result) {
            //    $scope.authors = result;
            //}, function(response) {
            //    if(response.status === 404) {
            //        $scope.loadAll();
            //    }
            //});
        };

        $scope.refresh = function () {
            $scope.loadAll();
            $('#saveAuthorModal').modal('hide');
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.author = {name: null, id: null};
            $scope.editForm.$setPristine();
            $scope.editForm.$setUntouched();
        };
    });
