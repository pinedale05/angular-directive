angular
	.module('app')
	.controller('homeCtrl', ['$scope', function($scope){
		$scope.title="Home";
		$scope.items= [ 
									 {house: 'Stark', words: 'Winter Is Coming'}, 
									 {house: 'Lannister', words: 'Hear Me Roar'},
									 {house: 'Baratheon', words: 'Ours Is The Fury'}, 
									 {house: 'Tully', words: 'Family, Duty, Honor'}, 
									 {house: 'Tyrell', words: 'Growing Strong'}, 
									 {house: 'Martell', words: 'Unbowed, Unbent, Unbroken'}, 
									 {house: 'Greyjoy', words: 'We So Not Sow'}, 
									 {house: 'Arryn', words: 'As High as Honor'}, 
									 {house: 'Targaryen', words: 'Fire and Blood'} 
									];

	}]);
