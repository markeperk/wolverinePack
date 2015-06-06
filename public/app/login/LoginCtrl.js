(function(){
	// 'use strict';

angular.module("booklet")

	.controller('LoginCtrl', function($scope) {
		$scope.login = function(user){
			console.log(user);
		// authService.register(user).then(function(response){
		// 	console.log(response);
		// })
		};
	});
})();