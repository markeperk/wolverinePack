(function(){
	'use strict';

var app = angular.module('booklet');

app.controller('SignupCtrl', function($scope, $http, $q, API){

$scope.signup = function(user){

	var dfd=$q.defer; 
	$http({
		method: 'POST', 
		url: API + '/api/users',
		data: {
			"fullName": user.fullName, 
			"email": user.email, 
			"password": user.password
		}
	})
	.then(function(res) {
		dfd.resolve(res); 
	}); 
	console.log("User created: ", user); 
	return dfd.promise; 

	}
}();