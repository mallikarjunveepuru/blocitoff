'use strict';

//for the registration form on the home page

angular
  .module('bloc1App')
  .controller('AuthCtrl', [
    '$scope',
    '$http',
    '$location',
    'AuthenticationService',
    function($scope, $http, $location, AuthenticationService) { 

      this.AuthenticationService = AuthenticationService;
      var self = this;

      //self.AuthenticationService.logout();

      //$scope.form = {};

      $scope.register = function(username, email, password){
        self.AuthenticationService
          .register(username, email, password)
          .then(function(){
            $location.url('/');
            $scope.message = 'Registered!  Sign in above';
          });
      };

      $scope.login = function(username, password){
        self.AuthenticationService
          .login(username, password)
          .then(function(){
            $location.url('/tasks');
          });
      };

    }
  ]);