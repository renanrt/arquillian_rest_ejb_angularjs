

angular.module('arquilliandemo').controller('EditStoreController', function($scope, $routeParams, $location, StoreResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.store = new StoreResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/Stores");
        };
        StoreResource.get({StoreId:$routeParams.StoreId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.store);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.store.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/Stores");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/Stores");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.store.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});