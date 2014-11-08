angular.module('arquilliandemo').factory('TalkResource', function($resource){
    var resource = $resource('rest/talks/:TalkId',{TalkId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});