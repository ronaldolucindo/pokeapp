var pokeApp = angular.module('pokeApp', ['ngRoute']);

pokeApp.config(function($routeProvider, $locationProvider) {
	//remove #
	//$locationProvider.html5Mode(true);
	$routeProvider

	//login route
	.when('/', {
		templateUrl: '/views/login.html',
		controller: 'loginController'
	})

	//register route
	.when('/register', {
		templateUrl: '/views/register.html',
		controller: 'registerController'
	})

	//user route
	.when('/user', {
		templateUrl: '/views/user.html',
		controller: 'userController'
	})

	//add pokemon route
	.when('/add-pokemon', {
		templateUrl: '/views/add-pokemon.html',
		controller: 'addPokemon'
	})

	.otherwise({redirectTo: '/'});
	
});
