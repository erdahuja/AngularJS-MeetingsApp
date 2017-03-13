angular.module('home')
.controller('mainHomeController',['$scope',
	'$state',
	'loginServices',
	function($scope,$state,loginServices){
	$scope.logout  = loginServices.logOut;
}])

;