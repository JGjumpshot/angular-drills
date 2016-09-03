angular.module('app3').controller('controller', function($scope, service) {
    //$scope.test = "it's working";
    $scope.people = service.getData();
})