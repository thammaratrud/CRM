'use strict';
myApp.controller('accountsController', ['$scope', '$http','config',
    function ($scope, $http,config) {
        var serviceBase = config.serviceBase;
        $scope.data = {};
        
        $scope.saveAccounts = function (data) {
            alert(JSON.stringify(data))
            $http.post(serviceBase + 'api/accounts', data).success(function (response) {
                $scope.accountsData = response;
                console.log(JSON.stringify($scope.accountsData));
                alert("Save complete")
            }).error(function (err) {
                // alert();
                alert('save failed : ' + err);
            })
        }
    }])