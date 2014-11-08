
angular.module('arquilliandemo').controller('NewSpeakerController', function ($scope, $location, locationParser, SpeakerResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.speaker = $scope.speaker || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/Speakers/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        SpeakerResource.save($scope.speaker, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Speakers");
    };
});