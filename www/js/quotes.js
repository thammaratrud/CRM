'use strict';
myApp.controller('quotesController', ['$scope', '$http', 'config', 'localStorageService',
    function ($scope, $http, config, localStorageService) {
        var serviceBase = config.serviceBase;
        $scope.dataQuotes = {};
        // $scope.topic = $scope.dataQuotes.topic;
        // $scope.companyname = $scope.dataQuotes.companyname;
        // $scope.lastname = $scope.dataQuotes.lastname;
        var user = localStorageService.get('authorizationData');



        $scope.saveQuotes = function () {
            alert(JSON.stringify($scope.dataQuotes))
            if (!$scope.quotesData) {
                $http.post(serviceBase + 'api/quotes', $scope.dataQuotes).success(function (response) {
                    $scope.quotesData = response;
                    console.log(JSON.stringify($scope.quotesData));
                    alert($scope.quotesData);
                    alert("Save complete");
                }).error(function (err) {
                    // alert();
                    alert('save failed : ' + JSON.stringify(err));
                })
            } else {
                $http.put(serviceBase + 'api/quotes' + $scope.quotesData._id, dataQuotes).success(function (response) {
                    $scope.quotesData = response;
                    alert($scope.quotesData);
                    console.log(JSON.stringify($scope.quotesData));
                    alert("Save complete");
                }).error(function (err) {
                    // alert();
                    alert('save failed : ' + JSON.stringify(err));
                })
            }

        }
    }])