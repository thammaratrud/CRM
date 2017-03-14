'use strict';
myApp.controller('loginController', ['$scope', '$location', 'authService', 'ngAuthSettings', 'localStorageService', '$ionicLoading', '$cordovaDevice', function ($scope, $location, authService, ngAuthSettings, localStorageService, $ionicLoading, $cordovaDevice) {
    // var device = $cordovaDevice.getUUID();
    

    $scope.loginData = {
        username: "",
        useRefreshTokens: false
    };

    $scope.message = "";

    $scope.login = function () {
        $ionicLoading.show({
            noBackdrop: false,
            template: '<p><ion-spinner icon="ripple" class="spinner-assertive"></ion-spinner>Please Wait</p>',
        });

        authService.login($scope.loginData).then(function (response) {

            $location.path('/views/home');
            alert('Please turn on location before checkin or checkout')
            $ionicLoading.hide();

        },
            function (err) {
                $scope.message = err.error_description;
                $ionicLoading.hide();

            });

    };



  
}]);
