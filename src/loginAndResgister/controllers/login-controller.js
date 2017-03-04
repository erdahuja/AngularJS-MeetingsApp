angular.module('login&register')
.controller('loginController',['$scope','Authentication',function($scope,Authentication){
	console.log('Hiee')
	 $scope.login = function () {
            Authentication.login($scope.user);
        };

}])