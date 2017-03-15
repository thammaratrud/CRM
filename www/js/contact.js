'use strict';
myApp.controller('contactsController', ['$scope', '$http', 'config', 'localStorageService', '$cordovaContacts', '$cordovaCamera',
    function ($scope, $http, config, localStorageService, $cordovaContacts, $cordovaCamera) {
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

        $scope.getContactList = function () {
            $cordovaContacts.find({ filter: '' }).then(function (result) {
                $scope.contacts = result;
                // prompt(JSON.stringify(result))
                // prompt('copy token', JSON.stringify($scope.contacts));
            }, function (error) {
                console.log("ERROR: " + error);
            });
        }
        $scope.createContact = function () {
            $cordovaContacts.save({ "displayName": "Steve Jobs" }).then(function (result) {
                console.log(JSON.stringify(result));
            }, function (error) {
                console.log(error);
            });
        }

        $scope.removeContact = function () {
            $cordovaContacts.remove({ "displayName": "Steve Jobs" }).then(function (result) {
                console.log(JSON.stringify(result));
            }, function (error) {
                console.log(error);
            });
        }
        $scope.takePicture = function () {
            var options = {
                quality: 75,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                allowEdit: true,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 300,
                targetHeight: 300,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: true
            };

            $cordovaCamera.getPicture(options).then(function (imageData) {
                $scope.imgURI = "data:image/jpeg;base64," + imageData;
            }, function (err) {
                // An error occured. Show a message to the user
            });
        }

    }])