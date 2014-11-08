

angular.module('arquilliandemo').controller('EditTalkController', function($scope, $routeParams, $location, TalkResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.talk = new TalkResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/Talks");
        };
        TalkResource.get({TalkId:$routeParams.TalkId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.talk);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.talk.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/Talks");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/Talks");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.talk.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});