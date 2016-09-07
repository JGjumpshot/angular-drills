angular.module('app6').controller('homeController', function($scope, service) {
    $scope.routeName = "Home";

    service.getPeople().then(function(response) {
        console.log(response.data)
        $scope.people = response.data.results;
    })
})