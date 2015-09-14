angular.module('nicholasstarkApp')
  .service('users', ['$http', '$stateParams', '$rootScope', 'toastr',
    function($http, $stateParams, $rootScope, toastr) {
      var get_default = function() {
      return {
          list: [],
          single: {},
          statuses: []
      };
    }

    var users = function(users) {
      return $http.get('rest/users.json').
        success(function(response) {
         users.list = response;
      }).error(function(response) {
        toastr.error('Something went wrong');
      });
    }
    
  // public methods
     return {
      list: {
        get: users
      },
      single: {
      },
      model: {
        get: get_default
      }
     }
  }]);
