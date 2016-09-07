angular.module('arrayApp').controller('controller', function($scope, service) {
  //$scope.test = 'test'
  $scope.people = service.getData();
})