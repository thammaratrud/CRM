'use strict';
myApp.controller('register', ['$scope', '$http','config', function ($scope, $http,config) {
     var serviceBase = config.serviceBase;
    $scope.user = {};
    $scope.signUp = function () {
        alert(JSON.stringify($scope.user))
        $http.post(serviceBase + 'api/auth/signup', $scope.user).success(function (response) {
            $scope.resisterData = response;
            console.log(JSON.stringify($scope.resisterData));
            alert("complete")
            $location.path('#/templates/home');
        }).error(function (err) {
            // alert();
            alert('failed : ' +JSON.stringify(err) );
        })
    }
}]);