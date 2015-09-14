'use strict';

/**
 * @ngdoc function
 * @name nicholasstarkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nicholasstarkApp
 */
angular.module('nicholasstarkApp')
  .controller('MainCtrl', ['$scope', '$stateParams', '$rootScope', '$state', 
  '$timeout', 'users', function($scope, $stateParams, $rootScope, $state, $timeout, users) {
    $scope.init = function() { 
      $scope.users = users.model.get();
      users.list.get($scope.users);
      console.log($scope.users)
    }
    $scope.init();
  }]);
