
angular.module('arquilliandemo').controller('NewBookController', function ($scope, $location, locationParser, BookResource , SpeakerResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.book = $scope.book || {};
    
    $scope.languageList = [
        "ENGLISH",
        "FRENCH"
    ];
    
    $scope.speakersList = SpeakerResource.queryAll(function(items){
        $scope.speakersSelectionList = $.map(items, function(item) {
            return ( {
                value : item.id,
                text : item.id
            });
        });
    });
    $scope.$watch("speakersSelection", function(selection) {
        if (typeof selection != 'undefined') {
            $scope.book.speakers = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.id = selectedItem.value;
                $scope.book.speakers.push(collectionItem);
            });
        }
    });
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/Books/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        BookResource.save($scope.book, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Books");
    };
});