'use strict';
myApp.controller('accountsController', ['$scope', '$http', 'config', 'localStorageService',
    function ($scope, $http, config, localStorageService) {
        var serviceBase = config.serviceBase;
        $scope.data = {};
        var user = localStorageService.get('authorizationData');



        $scope.saveAccounts = function (data) {
            alert(JSON.stringify(data))
            if (!$scope.accountsData) {
                $http.post(serviceBase + 'api/accounts', data).success(function (response) {
                    $scope.accountsData = response;
                    console.log(JSON.stringify($scope.accountsData));
                    alert("Save complete")
                }).error(function (err) {
                    // alert();
                    alert('save failed : ' + JSON.stringify(err));
                })
            } else {
                $http.put(serviceBase + 'api/accounts/' + $scope.accountsData._id, data).success(function (response) {
                    $scope.accountsData = response;
                    console.log(JSON.stringify($scope.accountsData));
                    alert("Save complete")
                }).error(function (err) {
                    // alert();
                    alert('save failed : ' + JSON.stringify(err));
                })
            }

        }
    }])