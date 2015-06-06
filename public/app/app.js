(function(){
  // 'use strict';

angular
  .module("booklet", ['ui.router'])

//config
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.when('', '/');
		$urlRouterProvider.otherwise('/');
		$stateProvider
		 	.state('home', {
		 			url: '/',
          templateUrl : './app/home/home.html',
          controller  : 'HomeCtrl'
      })
      .state('signup', {
          url: '/signup',
          templateUrl: './app/signup/signup.html',
          controller: 'SignupCtrl'
      })
      .state('login', {
      		url: '/login',
          templateUrl : './app/login/login.html',
          controller  : 'LoginCtrl'
      })
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
  })
})();
