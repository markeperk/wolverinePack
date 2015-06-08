(function(){

angular.module("booklet")
.controller('SignupCtrl', function($scope) {
		$scope.userSignup = function() {
			if ($scope.password !== $scope.password2) {
				$scope.error = "Passwords don't match.";
				return;
			}
			usersService.signup($scope.email, $scope.password, $scope.name).then(function(new_user) {
				$location.path('/home');
				console.log("success!", new_user);
			}).catch(function(err) {
				$scope.error = err.message;
			});
		};
});
})(); 