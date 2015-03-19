'use strict';

var app = angular
  .module('TaskNinjaApp', [
    'ngAnimate',
    'ngResource',    
    'ngRoute',    
    'firebase'
  ])
  .constant('FURL', 'https://josa.firebaseio.com/')  
  .config(function ($routeProvider) {
    $routeProvider      
      .when('/', {
        templateUrl: 'views/main.html'        
      })
      .when('/edit', {
        templateUrl: 'views/edit.html'
      })
      .when('/post', {
        templateUrl: 'views/post.html',
        controller: 'TaskController'
      })
      .when('/browse', {
        templateUrl: 'views/browse.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
