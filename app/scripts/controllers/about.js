'use strict';

/**
 * @ngdoc function
 * @name bloc1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bloc1App
 */
angular.module('bloc1App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
