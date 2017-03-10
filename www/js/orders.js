'use strict';
myApp.controller('ordersController', ['$scope', '$http', 'config', 'localStorageService',
    function ($scope, $http, config, localStorageService) {
        var serviceBase = config.serviceBase;
        $scope.dataOrders = {};
        // $scope.topic = $scope.dataOrders.topic;
        // $scope.companyname = $scope.dataOrders.companyname;
        // $scope.lastname = $scope.dataOrders.lastname;
        var user = localStorageService.get('authorizationData');



        $scope.saveOrders = function () {
            alert(JSON.stringify($scope.dataOrders))
            if (!$scope.ordersData) {
                $http.post(serviceBase + 'api/orders', $scope.dataOrders).success(function (response) {
                    $scope.ordersData = response;
                    console.log(JSON.stringify($scope.ordersData));
                    alert($scope.ordersData);
                    alert("Save complete");
                }).error(function (err) {
                    // alert();
                    alert('save failed : ' + JSON.stringify(err));
                })
            } else {
                $http.put(serviceBase + 'api/orders' + $scope.ordersData._id, dataOrders).success(function (response) {
                    $scope.ordersData = response;
                    alert($scope.ordersData);
                    console.log(JSON.stringify($scope.ordersData));
                    alert("Save complete");
                }).error(function (err) {
                    // alert();
                    alert('save failed : ' + JSON.stringify(err));
                })
            }

        }
    }])