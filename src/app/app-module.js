myApp = angular.module('myApp',[
	 'firebase',
    'restangular',
    'ui.router',
    'home',
    'login&register',
    'general',
    'meetings',
    'checkins'
	])
myApp.run(['$rootScope', '$location','fireBaseConstants', function ($rootScope, $location,fireBaseConstants) {
  var config = {
            apiKey:fireBaseConstants.apiKey,
            authDomain: fireBaseConstants.authDomain,
            databaseURL: fireBaseConstants.databaseURL,
            storageBucket:fireBaseConstants.storageBucket ,
            messagingSenderId: fireBaseConstants.messagingSenderId
        };
        firebase.initializeApp(config)

	//@ will be handles via states and checking token
    $rootScope.$on('$routeChangeError', function (event, next, previous, error) {
        if (error == 'AUTH_REQUIRED') {
            $rootScope.message = 'Sorry, you must log in to access that page';
            $location.path('/login');
        } //Auth Required
    }); //$routeChangeError
     window.fbAsyncInit = function() {
            FB.init({
                appId: '1637367083234452',
                cookie: true,
                xfbml: true,
                version: 'v2.8'
            });
            FB.AppEvents.logPageView();
        };

        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
}]); //run


myApp.constant('fireBaseConstants',{
    'apiKey':'AIzaSyDeAzEU-MeAHwCcXknTiLi8pXVpfZJvo-c',
    'authDomain':'angularmeetingsapp-a8b00.firebaseapp.com',
    'databaseURL':'https://angularmeetingsapp-a8b00.firebaseio.com',
    'storageBucket':'angularmeetingsapp-a8b00.appspot.com',
    'messagingSenderId':'174110142038'
})
myApp.config(function($stateProvider) {
  var helloState = {
    name: 'hello',
    url: '/hello',
    template: '<h3>hello world!</h3>'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
});

// myApp.config(['$routeProvider', function ($routeProvider) {
//     $routeProvider.
//     when('/login', {
//         templateUrl: 'views/login.html',
//         controller: 'RegistrationCtrl'
//     }).
//     when('/register', {
//         templateUrl: 'views/register.html',
//         controller: 'RegistrationCtrl'
//     }).
//     when('/checkins/:uId/:mId', {
//         templateUrl: 'views/checkins.html',
//         controller: 'CheckInsCtrl'
//     }).
//     when('/checkins/:uId/:mId/checkinsList', {
//         templateUrl: 'views/checkinslist.html',
//         controller: 'CheckInsCtrl'
//     }).

//     when('/meetings', {
//         templateUrl: 'views/meetings.html',
//         controller: 'MeetingController',
//         resolve: {
//             currentAuth: function (Authentication) {
//                     return Authentication.requireAuth();
//                 } //currentAuth
//         } //resolve
//     }).
//     otherwise({
//         redirectTo: '/meetings'
//     });
// }]);


/*@ test states*/
/* running states*/
// 1. login          :  /login
// 2. register       :  /register 
// 3. meetingAdd     :  /meetings/new
// 4. checkinsList   :  /checkins/list
// 5. checkinsConfirm:  /checkins/confirm
