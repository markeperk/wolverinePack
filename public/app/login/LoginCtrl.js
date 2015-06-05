(function(){
	'use strict';

var app = angular.module('booklet');

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