
var phonecatControllers = angular.module('phonecatControllers');
var injections = ['$scope', '$http', 'Phone'];

injections.push(function ($scope, $http, Phone) {

	$scope.query = '';
	$scope.orderProp = 'age';

	$scope.phones = Phone.query();
});

phonecatControllers.controller('phoneCatalogueController', injections);
