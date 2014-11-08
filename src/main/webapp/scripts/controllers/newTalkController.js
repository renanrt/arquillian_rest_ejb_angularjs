
angular.module('arquilliandemo').controller('NewTalkController', function ($scope, $location, locationParser, TalkResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.talk = $scope.talk || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/Talks/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        TalkResource.save($scope.talk, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Talks");
    };
});