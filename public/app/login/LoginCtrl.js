(function(){
	// 'use strict';

angular.module('booklet').controller('LoginCtrl', function($scope, $location, UsersService) {

	$scope.login = function() {
		UsersService.login($scope.email, $scope.password).then(function() {
			$location.path('/home');
		}).catch(function(err) {
			$scope.error = err;
		});;
	};
});
})(); 