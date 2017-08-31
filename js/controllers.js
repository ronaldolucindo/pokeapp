pokeApp.controller('addPokemon', function($scope, $http, userData){
	$scope.pokemonModel = {
	name: '',
	selectedName: '',
	move1: '',
	selectedMove1: '',
	move2: '',
	selectedMove2: '',
	move3: '',
	selectedMove3: '',
	move4: '',
	selectedMove4: ''
	};
	$scope.selectPokemon = function(pokemon){
		$scope.pokemonModel.selectedName = pokemon;
		$scope.pokemonModel.name = pokemon;
	}
	$scope.selectMove1 = function(m){
		$scope.pokemonModel.selectedMove1 = m;
	}
	$scope.selectMove2 = function(m){
		$scope.pokemonModel.selectedMove2 = m;
	}
	$scope.selectMove3 = function(m){
		$scope.pokemonModel.selectedMove3 = m;
	}
	$scope.selectMove4 = function(m){
		$scope.pokemonModel.selectedMove4 = m;
	}
	$http.get("http://pokeapi.co/api/v2/pokemon/?limit=900")
	.then(function(response){
		$scope.listPokemons = response.data;
	},
	function(response){
		$scope.apiError='Erro ao conectar a API POKEAPI, tente atualizar a página';
	});

	$http.get("http://pokeapi.co/api/v2/move/?limit=700")
	.then(function(response){
		$scope.listMoves = response.data;
	},
	function(response){
		$scope.apiError='Erro ao conectar a API POKEAPI, tente atualizar a página';
	});


});

pokeApp.controller('loginController', function($scope, $http, $window, userData){
	$scope.data = userData.get();
	//if user is logged-in redirect to /user
	if($scope.data){
		$window.location.href = '/#!/user';

	}
	$scope.loginModel ={
		user : '',
		passwd : ''
	};
	$scope.auth = false;
	$scope.loginError = false;
	//$scope.content = {};
	// $scope.getUser = function(path){
	// 	$http.get($scope.filePath)
	// 	.then(function(response){
	// 		$scope.content = response.data;
	// 		console.log($scope.content);
		
	// 		},
	// 	function(response){
	// 		//$scope.loginError = true;
	// 	console.log(response);
	// 	});

	// }
	

	$scope.loginSubmit = function(){
	
	$scope.filePath = '/files/' + $scope.loginModel.user + '.json';
	// $scope.getUser($scope.filePath);
	$http.get($scope.filePath)
	.then(function(response){
		$scope.content = response.data;
		console.log($scope.content);
		if($scope.content.password === $scope.loginModel.passwd){
			userData.set($scope.content);
			$window.location.href = '/#!/user';
		}
		else{
			$scope.loginError = true;
		}
		
	},
	function(response){
		$scope.loginError = true;
		// console.log(response);
	});

   	
   	};
	$scope.reset = function(){
		$scope.loginModel.user = '';
		$scope.loginModel.passwd = '';
	};

});

pokeApp.controller('registerController', function($scope, $http, userData){
	$scope.registerModel ={
		user : '',
		passwd : ''
	};
	$scope.userContent ={
			user : '',
			password: '',
			team: []
	};
	$scope.writeError = false;
	$scope.writeSuccess = false; 

	$scope.reset = function(){
		$scope.registerModel.user = '';
		$scope.registerModel.passwd = '';
	};

	$scope.save = function(){
		$scope.userContent.user = $scope.registerModel.user;
		$scope.userContent.password = $scope.registerModel.passwd;
		$http.post('/php/save-json.php', $scope.userContent)
		.then(function(){
			//success
			$scope.writeSuccess = true;
			$scope.reset();
		},
		function(){
			//error
			$scope.writeError = true;
		});
	};



});

pokeApp.controller('userController', function($scope, $http, $window, userData){
	$scope.data = userData.get();
	if($scope.data){
		//do stuff

	}
	else{
		$window.location.href = '/';
	}

});