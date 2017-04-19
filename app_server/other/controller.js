(function () {     // Building controllers for api http requests 

  // asssign controllers to myApp module 
  angular.module('myApp').controller('writePoemController', writePoemController);

     function writePoemController($http) {
     var vm = this;

     vm.addFaculty = function() {
               
        //alert("inside the function");
        
        var postData = {
          name: vm.name,
          text: vm.text,
          tags: vm.tags
        };
    
        console.log(postData);
        $http.post('/api/faculty/', postData).then(function(response) {
                vm.newpoem = response.data;
                console.log(response.status);
                window.location = "/about";
      });
  };
}