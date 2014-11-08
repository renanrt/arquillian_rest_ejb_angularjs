
angular.module('arquilliandemo').controller('NewStoreController', function ($scope, $location, locationParser, StoreResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.store = $scope.store || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/Stores/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        StoreResource.save($scope.store, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Stores");
    };
});