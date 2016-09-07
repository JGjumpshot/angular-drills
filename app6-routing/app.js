angular.module('app6', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
          controller: 'homeController',
          url: '/',
          templateUrl: './home.html'
      })
      .state('signup', {
        url: '/signup',
        controller: 'signupController',
        templateUrl: './signup.html'
      })
      .state('details', {
          url: '/details/:url',
          controller: 'detailsController',
          templateUrl: './details.html'
      })
})