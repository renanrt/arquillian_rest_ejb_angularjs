angular.module('arquilliandemo').factory('StoreResource', function($resource){
    var resource = $resource('rest/stores/:StoreId',{StoreId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});