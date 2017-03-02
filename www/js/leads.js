'use strict';
myApp.controller('leadsController', ['$scope', '$http', 'config', 'localStorageService',
    function ($scope, $http, config, localStorageService) {
        var serviceBase = config.serviceBase;
        $scope.dataLeads = {};
        var user = localStorageService.get('authorizationData');



        $scope.saveLeads = function (dataLeads) {
            alert(JSON.stringify(dataLeads))
            if (!$scope.leadsData) {
                $http.post(serviceBase + 'api/leads', dataLeads).success(function (response) {
                    $scope.leadsData = response;
                    console.log(JSON.stringify($scope.leadsData));
                    alert("Save complete")
                }).error(function (err) {
                    // alert();
                    alert('save failed : ' + JSON.stringify(err));
                })
            } else {
                $http.put(serviceBase + 'api/leads' + $scope.leadsData._id, dataLeads).success(function (response) {
                    $scope.leadsData = response;
                    console.log(JSON.stringify($scope.leadsData));
                    alert("Save complete")
                }).error(function (err) {
                    // alert();
                    alert('save failed : ' + JSON.stringify(err));
                })
            }

        }
    }])