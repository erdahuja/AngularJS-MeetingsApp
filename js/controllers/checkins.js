myApp.controller('CheckInsCtrl', ['$scope', '$firebaseArray', '$firebaseObject', '$rootScope', '$routeParams', '$location', function ($scope, $firebaseArray, $firebaseObject, $rootScope, $routeParams, $location) {

    var ref;

    $scope.whichmeeting = $routeParams.mId;
    $scope.whichuser = $routeParams.uId;
    ref = firebase.database().ref().child('users').child($scope.whichuser).child('meetings').child($scope.whichmeeting).child('checkins');

    checkinsList = $firebaseArray(ref);
    $scope.checkins = checkinsList;
    $scope.order = 'firstname';
    $scope.direction = null;
    $scope.query = '';
    $scope.pickRandom = function () {
        var rec = Math.round(Math.random() * (checkinsList.length - 1));
        $scope.recordId = checkinsList.$keyAt(rec);

    };
    $scope.showLove = function () {


    };

    $scope.deleteCheckin = function (key) {
        var refDel = ref.child(key);
        var record = $firebaseObject(refDel);
        record.$remove(key);

    };

    $scope.addCheckin = function () {


        $firebaseArray(ref).$add({
            firstname: $scope.user.firstname,

            lastname: $scope.user.lastname,
            date: firebase.database.ServerValue.TIMESTAMP,
            email: $scope.user.email


        }).then(function () {

            $location.path('/checkins' + '/' + $scope.whichuser + '/' + $scope.whichmeeting + '/' + 'checkinsList');

        });
    }



}]);
