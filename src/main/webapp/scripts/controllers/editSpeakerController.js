

angular.module('arquilliandemo').controller('EditSpeakerController', function($scope, $routeParams, $location, SpeakerResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.speaker = new SpeakerResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/Speakers");
        };
        SpeakerResource.get({SpeakerId:$routeParams.SpeakerId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.speaker);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.speaker.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/Speakers");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/Speakers");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.speaker.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});