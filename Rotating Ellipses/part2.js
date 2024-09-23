var rotationsModule = (function() {
	function changeSpeed() {
		var duration = document.getElementById("duration").value;// Get the value from the range input (duration in seconds)
	    document.getElementById("durationDisplay").value = duration + 's';// Update the displayed duration value next to the slider
        var animations = document.querySelectorAll('animate, animateTransform');// Find all SVG animations (both <animate> and <animateTransform> elements)
        animations.forEach(function(animation) {// For each animation, update its 'dur' (duration) attribute to the new value
            animation.setAttribute('dur', duration + 's');
        });
	}
	return {
        changeSpeed: changeSpeed
    };

})();