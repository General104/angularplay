var phonecatServices = angular.module('phonecatServices');

var injections = ['$resource'];

injections.push( function($resource) {
	return $resource('/data/:phoneId.json', {}, {
		query: { 
			method:'GET',
			params: { 
				phoneId:'phones'
			},
			isArray:true
		}
	});
});

phonecatServices.factory('Phone', injections);