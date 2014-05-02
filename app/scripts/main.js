angular
	.module('app',[
		'ui.router',
		'ui.select2',
		'app.directives.checkbox',
		'ui.bootstrap'
	])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home',{
				url:'/',
				templateUrl: 'templates/home.html',
				controller: 'homeCtrl'
			})
			.state('about',{
				url:'/about',
				templateUrl: 'templates/about.html',
				controller: 'aboutCtrl'
			})
			.state('contact',{
				url:'/contact',
				templateUrl: 'templates/contact.html',
				controller: 'paginationCtrl'
			})
	}])