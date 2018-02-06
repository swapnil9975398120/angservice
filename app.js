var app = angular.module('myApp', ['ui.router','ngMaterial']);

app.config(function($stateProvider, $urlRouterProvider) {
	
		$urlRouterProvider.otherwise('/home');

		$stateProvider		
			.state('page1', {
			  	 url: '/page1',
				 templateUrl: 'page1.html'
			})

			.state('page2', {
				url: '/page2',
				templateUrl: 'page2.html'       
			});
	
	});

app.controller('myController',myController);
myController.$inject = ['$scope'];

function myController($scope){
	alert("hi welcome to angularjs");
}