'use strict';
myApp.controller('register', ['$scope', '$http', 'config', '$location', function ($scope, $http, config, $location) {
    var serviceBase = config.serviceBase;
    $scope.user = {};
    $scope.signUp = function () {
        $scope.user.username = $scope.user.email;
        alert(JSON.stringify($scope.user))
        $http.post(serviceBase + 'api/auth/signup', $scope.user).success(function (response) {
            $scope.resisterData = response;
            console.log(JSON.stringify($scope.resisterData));
            alert("complete")
            var login = {
                username: $scope.user.username,
                password: $scope.user.password
            };
            $http.post(serviceBase + 'api/auth/signin', login).success(function (response) {
                $scope.resisterData = response;
                localStorageService.set('authorizationData', response);
                console.log(JSON.stringify($scope.resisterData));
                alert("login complete")
                $location.path('#/templates/home');
            }).error(function (err) {
                // alert();
                alert('login failed : ' + JSON.stringify(err));
            })
        }).error(function (err) {
            // alert();
            alert('failed : ' + JSON.stringify(err));
        })
    }
}]);