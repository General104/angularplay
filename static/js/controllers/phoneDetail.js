
var phonecatControllers = angular.module('phonecatControllers');
var injections = ['$scope', '$routeParams', 'Phone'];

injections.push(function($scope, $routeParams, Phone) {

	var params = { 
		phoneId: $routeParams.phoneId
	}

	$scope.phone = Phone.get(params, function(phone) {
		$scope.mainImageUrl = phone.images[0];
	});

	$scope
		.setImage = function(imageUrl) {
			$scope.mainImageUrl = imageUrl;
	};

});

phonecatControllers.controller('phoneDetailController', injections);
