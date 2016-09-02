angular.module('arrayApp').controller('arrayController', function($scope, mainService) {
    $scope.test = "test is working";

    $scope.people = mainService.getData();

})