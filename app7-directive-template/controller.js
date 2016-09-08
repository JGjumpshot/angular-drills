angular.module('directiveApp').controller('mainController', function($scope) {
    $scope.myFunc = function(msg) {
        alert(msg);
    }
})