angular.module('login&register',['ngStorage'])
.config(function($stateProvider){
	$stateProvider
	.state('visitorPage',{
		url:'',
		abstract:true,
		templateUrl:'common/views/header/header-template.html'
	})
	.state('visitorPage.login',{
		url:'/login',
		views:{
			'visitor_content':{
		templateUrl:'loginAndResgister/templates/login-template.html',
		controller:'loginController'
				
			}
		}
	})
	.state('visitorPage.register',{
		url:'/register',
		views:{
			'visitor_content':{
		templateUrl:'loginAndResgister/templates/register-template.html',
		controller:'registerController'
				
			}

		}
	})

})
.service('loginServices',['$localStorage','$state',function($localStorage,$state){
	this.checkIfLogin = function(){
		var storageKey;
		//console.log($localStorage);
		if(localStorage.length>0){
		for(var key in localStorage){
			if(key.match('DEFAULT')){
				storageKey = JSON.parse(localStorage[key]);
			}
		}
		if(angular.isDefined(storageKey)&&storageKey.uid){
			return true;
		}else{
			return false;
		}
	}else{
		return false;
	}
	}
		this.logOut = function(){
				var storageKey;
				var KeyFound=false
				for(var key in localStorage){
			if(key.match('DEFAULT')){
				storageKey =key;
				KeyFound=true;
			   }
			}
			if(KeyFound){
			delete localStorage[storageKey];
			$state.go('visitorPage.login');
		}
	}
}])

// .service('appUserInfo',['$localStorage','$state',function($localStorage,$state){

// }])
