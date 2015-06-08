(function(){

angular.module('booklet').controller('SignupCtrl', function($scope, UsersService) {

	$scope.signup = function(user) {
		if (user.password !== user.password2) {
			$scope.error = "Please make sure your passwords match.";
			return;
		}
		UsersService.signup(user.email, user.password, user.name).then(function(new_user) {
			console.log("success!", new_user);
		}).catch(function(err) {
			$scope.error = err.message;
		});
	};
});
})(); 