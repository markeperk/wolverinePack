(function(){
	'use strict';

var app = angular.module('booklet');

//footer directive
app
	.directive('zfooter', function(){
		return {
			templateUrl: 'app/directives/footer/footer.html',
			restrict: 'E',
			// replace: true,
		};
	});

})();
