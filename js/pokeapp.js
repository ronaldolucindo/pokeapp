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
	.when('/add', {
		templateUrl: '/views/add.html',
		controller: 'addController'
	})

	//.otherwise({redirectTo: '/'});
	
});

pokeApp.service('userData', function(){
	var data = null;
	return {
		get: function(){
			return data;
		},
		set: function(value){
			data = value;
		}

	}
	
});
