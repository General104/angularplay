var module
var moduleName = 'phoneCatalogueApp'
var moduleParams = ['ngRoute', 'phonecatControllers']
var moduleConfig = ['$routeProvider']

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

angular.module('phonecatControllers', [])
module = angular.module(moduleName, moduleParams)

moduleConfig.push(configAction)
module.config(moduleConfig)