// associate factory with angular module 
angular.module('myApp').factory('PoemFactory' , PoemFactory);

// creating the service 
function PoemFactory($http)  {
    
    return { //json data    property: function name
        getAllPoems:  getAllPoems,
        getOnePoem:   getOnePoem
    };
    
    function getAllPoems() {
        return $http.get('/api/poems').then(done).catch(failed);
    }
    
    function getOnePoem(id) {
        return $http.get('/api/poems/' + id).then(done).catch(failed);
    }
    
    function done(response)  {
        return response.data;   
    }
    
    function failed(error) {
        return error.statusText; 
    }
}
