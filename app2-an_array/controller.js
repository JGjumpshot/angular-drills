angular.module('arrayApp').controller('controller', function($scope) {
  //$scope.test = 'test'
  $scope.people = service.getData();
})