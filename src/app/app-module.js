myApp = angular.module('myApp',[
	 'firebase',
    'restangular',
    'ui.router',
    'home',
    'login&register',
    'general'
	])
myApp.run(['$rootScope', '$location', function ($rootScope, $location) {

	//@ will be handles via states and checking token
    $rootScope.$on('$routeChangeError', function (event, next, previous, error) {
        if (error == 'AUTH_REQUIRED') {
            $rootScope.message = 'Sorry, you must log in to access that page';
            $location.path('/login');
        } //Auth Required
    }); //$routeChangeError
}]); //run

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
