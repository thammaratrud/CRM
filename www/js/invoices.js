'use strict';
myApp.controller('invoicesController', ['$scope', '$http', 'config', 'localStorageService',
    function ($scope, $http, config, localStorageService) {
        var serviceBase = config.serviceBase;
        $scope.dataInvoices = {};
        // $scope.topic = $scope.dataInvoices.topic;
        // $scope.companyname = $scope.dataInvoices.companyname;
        // $scope.lastname = $scope.dataInvoices.lastname;
        var user = localStorageService.get('authorizationData');



        $scope.saveInvoices = function () {
            alert(JSON.stringify($scope.dataInvoices))
            if (!$scope.invoicesData) {
                $http.post(serviceBase + 'api/invoices', $scope.dataInvoices).success(function (response) {
                    $scope.invoicesData = response;
                    console.log(JSON.stringify($scope.invoicesData));
                    alert($scope.invoicesData);
                    alert("Save complete");
                }).error(function (err) {
                    // alert();
                    alert('save failed : ' + JSON.stringify(err));
                })
            } else {
                $http.put(serviceBase + 'api/invoices' + $scope.invoicesData._id, dataInvoices).success(function (response) {
                    $scope.invoicesData = response;
                    alert($scope.invoicesData);
                    console.log(JSON.stringify($scope.invoicesData));
                    alert("Save complete");
                }).error(function (err) {
                    // alert();
                    alert('save failed : ' + JSON.stringify(err));
                })
            }

        }
    }])