(function(){
	'use strict';

var app = angular.module('booklet');

app.controller('LoginCtrl', function($scope, $http, $q, API){
	var dfd = $q.defer;
	$http({
		method: 'GET', 
		url: API + '/api/users/auth' //url always needs initial slash
	})
	.then(function(res) {
		dfd.resolve(res); 
	});
	console.log("Logged in ", user); 
	return dfd.promise;
	});
}();