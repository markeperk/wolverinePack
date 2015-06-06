(function(){

angular.module("booklet")
.controller('SignupCtrl', function($scope) {
	$scope.signup = function(user){
		console.log(user);
		console.log(user.email);
		// authService.register(user).then(function(response){
		// 	console.log(response);
		// })
		}
	});
})();