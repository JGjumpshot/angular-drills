angular.module('directiveApp').directive('dmHeader', function() {
    
    function getColor() {
        var colors = ['red', 'green', 'blue', 'purple', 'yellow', 'orange', 'black'];
        var index = Math.floor(Math.random() * colors.length);

        return colors[index];
    }
    
    return {
        restrict: 'AE',
        scope: {
            title: '@',
            callback: '&'
        },
        link: function(scope, element, attributes) {
            element.on('click', function(event) {
                scope.callback();
                
                var newColor = getColor();
                

               var targetElement = element.find('section');
               targetElement.css('background-color', newColor);
            });
        },
        templateUrl: 'dm-header.html',
        controller: function($scope) {
            $scope.test = "Clicked!";
        }

    }
})