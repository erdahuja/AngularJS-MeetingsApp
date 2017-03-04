angular.module('login&register',[])
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
		controllers:'loginController'
				
			}
		}
	})
	.state('visitorPage.register',{
		url:'/register',
		views:{
			'visitor_content':{
		templateUrl:'loginAndResgister/templates/register-template.html',
		controllers:'registerController'
				
			}

		}
	})
})