angular.module('login&register')
.controller('registerController',['$scope','Authentication',function($scope,Authentication){
	  $scope.register = function () {
            Authentication.register($scope.user);
        }; //register

	
}])