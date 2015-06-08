angular.module('booklet').service('SignupService', function($http, $q) {

	this.signup = function(email, password, name) { 
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: '/api/users',
			data:  {
				email: email,
				password: password,
				name: name
			}
		}).then(function(res) {
			deferred.resolve(res.data);
		}).catch(function(res) {
			deferred.reject(res.data);
		});
		return deferred.promise;
	};
});