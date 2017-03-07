'use strict';
myApp.controller('contactsController', ['$scope', '$http', 'config', 'localStorageService',
    function ($scope, $http, config, localStorageService) {
        var serviceBase = config.serviceBase;
        $scope.datacontacts = {};
        var user = localStorageService.get('authorizationData');



        $scope.savecontacts = function () {
            alert(JSON.stringify($scope.datacontacts))
            if (!$scope.contactsData) {
                $http.post(serviceBase + 'api/contacts', $scope.datacontacts).success(function (response) {
                    $scope.contactsData = response;
                    console.log(JSON.stringify($scope.contactsData));
                    alert($scope.contactsData);
                    alert("Save complete");
                }).error(function (err) {
                    // alert();
                    alert('save failed : ' + JSON.stringify(err));
                })
            } else {
                $http.put(serviceBase + 'api/contacts' + $scope.contactsData._id, datacontacts).success(function (response) {
                    $scope.contactsData = response;
                    alert($scope.contactsData);
                    console.log(JSON.stringify($scope.contactsData));
                    alert("Save complete");
                }).error(function (err) {
                    // alert();
                    alert('save failed : ' + JSON.stringify(err));
                })
            }

        }
    }])