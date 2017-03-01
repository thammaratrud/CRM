'use strict';
myApp.controller('accountsController', ['$scope', '$http',
    function ($scope, $http) {
        $scope.data = {};
        $scope.saveAccounts = function () {
            $http.post(serviceBase + '/api/accounts', $scope.data).success(function (response) {
                $scope.accountsData = response;
                console.log(JSON.stringify($scope.accountsData));
                alert("Save complete")
            }).error(function (err) {
                // alert();
                alert('save failed : ' + err);
            })
        }
    }])