(function(){
	// 'use strict';

angular.module('booklet').controller('LoginCtrl', function($scope, $location, UsersService) {

<<<<<<< HEAD
	$scope.login = function() {
		UsersService.login($scope.email, $scope.password).then(function() {
			$location.path('/home');
		}).catch(function(err) {
			$scope.error = err;
		});;
	};
});
})(); 
=======
app.controller('LoginCtrl', function($scope, $http, $q, API){
	$scope.login = function(user){
		var dfd = $q.defer;
		$http({
			method: 'POST', 
			url: API + '/api/users/auth', //url always needs initial slash
			data: {
				email: user.email,
				password: user.password
			}
		})
		.then(function(res) {
			dfd.resolve(res); 
		});
		console.log("Logged in ", user); 
		return dfd.promise;
		});
	}
}();
>>>>>>> 4d5ffdcd4e087ada7d3808a31812ab62d0758016
