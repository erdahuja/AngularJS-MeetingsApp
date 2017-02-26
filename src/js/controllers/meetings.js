myApp.controller('MeetingController', ['$scope', '$firebaseAuth', '$firebaseArray', '$rootScope', function ($scope, $firebaseAuth, $firebaseArray, $rootScope) {

    var ref = firebase.database().ref();
    var auth = $firebaseAuth();

    auth.$onAuthStateChanged(function (authUser) {
        if (authUser) {

            var meetingsRef = ref.child('users').child(authUser.uid).child('meetings');
            var meetingsInfo = $firebaseArray(meetingsRef);
            $scope.meetings = meetingsInfo;

            meetingsInfo.$loaded().then(function (data) {
                $rootScope.howManyMeetings = meetingsInfo.length;


            });

            meetingsInfo.$watch(function (data) {

                $rootScope.howManyMeetings = meetingsInfo.length;

            });


            $scope.deleteMeeting = function (key) {

                meetingsInfo.$remove(key);

            };

            $scope.addMeeting = function () {

                    meetingsInfo.$add({
                        name: $scope.meetingname,
                        date: firebase.database.ServerValue.TIMESTAMP


                    }).then(function () {
                        $scope.meetingname = '';


                    }); //promise

                } //addmeeting

        }


    }); //onauthstatechanged


}]);
