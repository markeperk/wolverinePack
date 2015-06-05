(function(){
  'use strict';

var app = angular.module('booklet', [ 'ui.router']);

//config
app
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.when('', '/');
		$urlRouterProvider.otherwise('/');
		$stateProvider
		 	.state('home', {
		 			url: '/',
          templateUrl : 'app/home/home.html',
          controller  : 'HomeCtrl'
      })
      .state('login', {
      		url: '/login',
          templateUrl : 'app/login/login.html',
          controller  : 'LoginCtrl'
      });
      // .state('secure', {
      //     abstract: true,
      //     template: '<div ui-view>',
      //     controller: 'SecureCtrl',
      //     resolve: {
      //       isLoggedIn: function(authService){
      //         return authService.isLoggedIn();
      //       }
      //     }
      // })
      // .state('secure.dashboard', {
      //     url: '/dashboard',
      //     templateUrl: 'app/secure/dashboard.html',
      //     controller: 'DashboardCtrl'
      // });
});

//declare URL for Server and Endpoints
app.constant=('API', 'localhost:8080'); 

})();
