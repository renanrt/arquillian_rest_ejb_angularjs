

angular.module('arquilliandemo').controller('EditBookController', function($scope, $routeParams, $location, BookResource , SpeakerResource) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.book = new BookResource(self.original);
            SpeakerResource.queryAll(function(items) {
                $scope.speakersSelectionList = $.map(items, function(item) {
                    var wrappedObject = {
                        id : item.id
                    };
                    var labelObject = {
                        value : item.id,
                        text : item.id
                    };
                    if($scope.book.speakers){
                        $.each($scope.book.speakers, function(idx, element) {
                            if(item.id == element.id) {
                                $scope.speakersSelection.push(labelObject);
                                $scope.book.speakers.push(wrappedObject);
                            }
                        });
                        self.original.speakers = $scope.book.speakers;
                    }
                    return labelObject;
                });
            });
        };
        var errorCallback = function() {
            $location.path("/Books");
        };
        BookResource.get({BookId:$routeParams.BookId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.book);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.book.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/Books");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/Books");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.book.$remove(successCallback, errorCallback);
    };
    
    $scope.languageList = [
        "ENGLISH",  
        "FRENCH"  
    ];
    $scope.speakersSelection = $scope.speakersSelection || [];
    $scope.$watch("speakersSelection", function(selection) {
        if (typeof selection != 'undefined' && $scope.book) {
            $scope.book.speakers = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.id = selectedItem.value;
                $scope.book.speakers.push(collectionItem);
            });
        }
    });
    
    $scope.get();
});