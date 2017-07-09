angular.module('general',[])
.factory('Authentication', ['$rootScope', '$location', '$firebaseObject', '$firebaseAuth',
    function ($rootScope, $location, $firebaseObject, $firebaseAuth) {

        var ref = firebase.database().ref();
        var auth = $firebaseAuth();
        var myObject;

        auth.$onAuthStateChanged(function (authUser) {
            if (authUser) {
                var userRef = ref.child('users').child(authUser.uid);
                var userObj = $firebaseObject(userRef);
                $rootScope.currentUser = userObj;
            } else {
                $rootScope.currentUser = '';
            }
        });

        myObject = {

            checkLoginState: function () {
                FB.getLoginStatus(function (response) {
                    statusChangeCallback(response);
                });
            },
            login: function (user) {
                auth.$signInWithEmailAndPassword(
                    user.email,
                    user.password
                ).then(function (user) {
                    //$location.path('/meetings');
                     //@ will do later once all states are ready
                    alert('successfull Login')
                }).catch(function (error) {
                    $rootScope.message = error.message;
                }); //signInWithEmailAndPassword
            }, //login

            logout: function () {
                return auth.$signOut();
            }, //logout

            requireAuth: function () {
                return auth.$requireSignIn();
            }, //require Authentication

            register: function (user) {
                    auth.$createUserWithEmailAndPassword(
                        user.email,
                        user.password
                    ).then(function (regUser) {
                        var regRef = ref.child('users')
                            .child(regUser.uid).set({
                                date: firebase.database.ServerValue.TIMESTAMP,
                                regUser: regUser.uid,
                                firstname: user.firstname,
                                lastname: user.lastname,
                                email: user.email
                            }); //userinfo
                        myObject.login(user);
                    }).catch(function (error) {
                        $rootScope.message = error.message;
                    }); //createUserWithEmailAndPassword
                } //register

        }; //return


        return myObject;

    }
]); //factory
