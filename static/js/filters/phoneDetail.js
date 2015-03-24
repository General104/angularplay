var filters = angular.module('phonecatFilters')

var checkmark = function(input) {
	return input ? '\u2713' : '\u2718'
}

filters.filter('checkmark', function() {
	return checkmark 
});