animationsHolder = angular.module('phonecatAnimations');


var animations = {}
var stop = function(cancel) {
	
	if(cancel)
		element.stop();

};

animations.addClass = function(element, className, done) {

	if(className != 'active') {
		return;
	}

	element.css({
		position: 'absolute',
		top: 500,
		left: 0,
		display: 'block'
	});

	jQuery(element).animate({
		top: 0
	}, done);

	return stop;
}


animations.removeClass = function(element, className, done) {

	if(className != 'active') {
		return;
	}

	element.css({
		position: 'absolute',
		left: 0,
		top: 0
	});

	jQuery(element).animate({
		top: -500
	}, done);

	return stop;
}


animationsHolder.animation('.phone', function() {
	return animations;
});