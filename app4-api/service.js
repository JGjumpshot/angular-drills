angular.module('apiApp').service('service', function($http) {
    this.getApi = function() {
        var promise = $http({
            method: 'GET',
            url: 'http://swapi.co/api/starships/'
        }).then(function(response) {
            if(response.status === 200) {
              return response;
            }

            else {
                return "error getting data";
            }
        })
        return promise;
    }
})