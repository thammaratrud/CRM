'use strict';
myApp.controller('aboutController', ['$scope', '$cordovaSocialSharing',
    function ($scope, $cordovaSocialSharing) {
        $scope.shareAnywhere = function (message, image, link) {
            $cordovaSocialSharing.share(" ", message, image, link).then(function (result) {
                 $cordovaSocialSharing.shareAnywhere(message, image, link);
            }, function (error) {
                alert("Cannot share on shareAnywhere");
            });
        }

        $scope.shareViaTwitter = function (message, image, link) {
            $cordovaSocialSharing.canShareVia("twitter", message, image, link).then(function (result) {
                $cordovaSocialSharing.shareViaTwitter(message, image, link);
            }, function (error) {
                alert("Cannot share on Twitter");
            });
        }

    }])