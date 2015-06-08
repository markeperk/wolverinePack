angular.module("booklet").service('usersService', function($http, $q) {

	this.signup = function(email, password, firstName, lastName) {
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: '/api/users',
			data:  {
				email: email,
				password: password,
				name: firstName
			}
		}).then(function(res) {
			deferred.resolve(res.data);
		}).catch(function(res) {
			deferred.reject(res.data);
		});
		return deferred.promise;
	};
});