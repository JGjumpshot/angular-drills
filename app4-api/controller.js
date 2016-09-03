angular.module('apiApp').controller('controller', function($scope, service) {
    //$scope.test = "rock on"
    $scope.getShips = function() {
        var promise = service.getApi();
        promise.then(function(starships) {
            $scope.starships = starships;
        })
    }
    $scope.getShips();
})