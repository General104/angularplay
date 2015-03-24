
var phonecatControllers = angular.module('phonecatControllers');
var injections = ['$scope', '$http'];

injections.push(function ($scope, $http) {

	$scope.query = '';
	$scope.orderProp = 'age';

	$http.get('data/phones.json').success(function(data) {
		$scope.phones = data;
	});

});

phonecatControllers.controller('phoneCatalogueController', injections);
