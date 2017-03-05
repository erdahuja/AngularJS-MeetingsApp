angular.module('checkins',[])
.config(function($stateProvider){
	$stateProvider
	.state('checkins',{
		parent: 'mainHome',
        abstract: true,
        url:'/checkins',
        views:{
        	'content_views':{
        		template:'<ui-view></ui-view>'
        	}
        }
	})
	.state('checkins.list',{
		url:'/list',
		views:{
			'':{
				templateUrl:'app/checkins/templates/list-checkins-template.html',
				controller:'listCheckinsController'
			}
		}
	})
	// @ have to make wit this id
		.state('checkins.confirm',{
		url:'/confirm',
		views:{
			'':{
				templateUrl:'app/checkins/templates/checkins-template.html',
				controller:'listCheckinsController'
			}
		}
	})
})