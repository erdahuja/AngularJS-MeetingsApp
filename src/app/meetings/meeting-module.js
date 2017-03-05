angular.module('meetings',[])
.config(function($stateProvider){
	$stateProvider
	.state('meetings',{
		parent: 'mainHome',
        abstract: true,
        url:'/meetings',
        views:{
        	'content_views':{
        		template:'<ui-view></ui-view>'
        	}
        }
	})
	.state('meetings.add',{
		url:'/new',
		views:{
			'':{
				templateUrl:'app/meetings/templates/new-meeting-template.html',
				controller:'newMeetingController'
			}
		}
	})
})