
var phonecatControllers = angular.module('phonecatControllers');
var injections = ['$scope', '$routeParams'];

injections.push(function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  });

phonecatControllers.controller('phoneDetailController', injections);
