angular.module("arrayApp").controller('arrayController', function($scope, service) {
    //$scope.test = "I love Kaitlyn";
    $scope.people = service.getData();
})