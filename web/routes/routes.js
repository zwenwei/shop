angular.module('app')
	.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

		$urlRouterProvider.otherwise('/main/home');

		$stateProvider
			.state('main', {
				url: '',
				abstruct: true,
				templateUrl: '/templates/main/main.html'
			})
			.state('main.home', {
				url: '/main/home',
				templateUrl: '/templates/home/home.html',
				controller: 'homeController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('main.home');
					}]
				}
			})
			.state('main.find', {
				url: '/main/find',
				templateUrl: '/templates/find/find.html'
			})
			.state('register', {
				url: '/register',
				templateUrl: '/templates/register/register.html',
				cache: false,
				controller: 'registerController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('register');
					}]
				}
			})
			.state('login', {
				url: '/login',
				templateUrl: '/templates/login/login.html',
				cache: false,
				controller: 'loginController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('login');
					}]
				}
			})
			.state('details', {
				url: '/details',
				templateUrl: '/templates/details/details.html',
				controller: 'detailsController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('details');
					}]
				}
			})


			$locationProvider.html5Mode(true);


	}])