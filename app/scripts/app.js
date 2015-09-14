'use strict';

/**
 * @ngdoc overview
 * @name nicholasstarkApp
 * @description
 * # nicholasstarkApp
 *
 * Main module of the application.
 */
angular
  .module('nicholasstarkApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.router.state',
    'toastr',
  ])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('root', {
        url: '',
        abstract: true,
        views: {
          'container': {
            templateUrl: "views/home.html"
          }
        }
      })
      .state('root.home', {
        url: '/home',
        controller: 'MainCtrl',
        views: {
          'home-container': {
            templateUrl: "views/main.html"
          }
        }
      })
      .state('root.about', {
        url: '/about',
        controller: 'AboutCtrl',
        views: {
          'home-container': {
            templateUrl: "views/about.html"
          }
        }
      })
    $urlRouterProvider.otherwise('/home');
  }]);
