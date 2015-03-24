var module
var moduleName = 'phonesModule'

var moduleParams = [
	'ngRoute', 
	'phonecatAnimations', 
	'phonecatServices', 
	'phonecatControllers',
	'phonecatFilters'
]

var moduleConfig = [
	'$routeProvider'
]

var configAction = function($routeProvider) {
	$routeProvider.
			when('/phones', {
				templateUrl: 'templates/partial/phone-list.html',
				controller: 'phoneCatalogueController'
			}).
			when('/phones/:phoneId', {
				templateUrl: 'templates/partial/phone-detail.html',
				controller: 'phoneDetailController'
			}).
			otherwise({
				redirectTo: '/phones'
			});
}

angular.module('phonecatServices', ['ngResource']);
angular.module('phonecatControllers', [])
angular.module('phonecatFilters', [])
angular.module('phonecatAnimations', ['ngAnimate']);

module = angular.module(moduleName, moduleParams)

moduleConfig.push(configAction)
module.config(moduleConfig)