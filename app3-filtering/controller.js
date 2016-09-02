angular.module("app").controller("controller", function($scope, mainService) {
    $scope.data = mainService.getData();
    
})