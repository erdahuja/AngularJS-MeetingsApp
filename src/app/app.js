var myApp = angular.module('myApp', [
    'ngRoute', 
    'firebase',
    'restangular',
    'ui.router'
    ]);

myApp.run(['$rootScope', '$location', function ($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function (event, next, previous, error) {
        if (error == 'AUTH_REQUIRED') {
            $rootScope.message = 'Sorry, you must log in to access that page';
            $location.path('/login');
        } //Auth Required
    }); //$routeChangeError
}]); //run

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/login', {
        templateUrl: 'views/login.html',
        controller: 'RegistrationCtrl'
    }).
    when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegistrationCtrl'
    }).
    when('/checkins/:uId/:mId', {
        templateUrl: 'views/checkins.html',
        controller: 'CheckInsCtrl'
    }).
    when('/checkins/:uId/:mId/checkinsList', {
        templateUrl: 'views/checkinslist.html',
        controller: 'CheckInsCtrl'
    }).

    when('/meetings', {
        templateUrl: 'views/meetings.html',
        controller: 'MeetingController',
        resolve: {
            currentAuth: function (Authentication) {
                    return Authentication.requireAuth();
                } //currentAuth
        } //resolve
    }).
    otherwise({
        redirectTo: '/meetings'
    });
}]);
