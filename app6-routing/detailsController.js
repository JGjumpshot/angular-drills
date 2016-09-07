angular.module('app6').controller('detailsController', function($scope, service, $stateParams) {
    service.getPerson($stateParams.url)
    .then(function(person) {
        $scope.person = person;
    })
})