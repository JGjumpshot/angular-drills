angular.module('apiApp').controller('controller', function($scope, service) {
    //$scope.test = "In demand";
    var promise = service.getApi();
    $scope.retrieveStarships = function() {
        var cPromise = service.getApi();
        cPromise.then(function(starships) {
            $scope.starships = starships;
        })
    }
    $scope.retrieveStarships();
})

