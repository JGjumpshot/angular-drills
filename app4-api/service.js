angular.module('apiApp').service('service', function($http) {
    this.getApi = function() {
        var promise = $http({
            method: 'GET',
            url: 'harrypotterapi.herokuapp.com/movies'
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