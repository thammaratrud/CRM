'use strict';
myApp.controller('mapController', ['$scope', '$cordovaGeolocation',
    function ($scope, $cordovaGeolocation) {

        $scope.map = map;
        // var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        var mapOptions = {
            center: new google.maps.LatLng(13.9339768, 100.7178051),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    }]);