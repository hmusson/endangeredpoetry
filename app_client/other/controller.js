// (function() {

// 	angular.module('myApp').controller('writePoemController', writePoemController);
// 	angular.module('myApp').controller('getOnePoemController', getOnePoemController);
	

// 	function writePoemController($http) {
// 		var vm = this;
// 		vm.writePoem = function() {
// 			var postData = {
// 				name: vm.name,
// 				text: vm.text,
// 				tags: vm.tags
// 			};
// 			console.log(postData);
// 			$http.post('/api/poems', postData).then(function(response) {
// 				vm.writepoem = response.data;
// 				console.log(response.status);
// 				window.location = '#/'
// 			});
// 		};
// 	}

// 	function getOnePoemController($http, $routeParams) {
// 		var vm = this; 
// 		console.log($routeParams);
// 		var id = $routeParams.id;

// 		$http.get('/api/poems' + id)
// 			.then(function(response) {
// 				vm.poems = response.data;
// 			});
// 	}
// }

(function () {     // Building controllers for api http requests 

  // asssign controllers to myApp module 
  angular.module('myApp').controller('PoemController', PoemController);
  angular.module('myApp').controller('GetOnePoemController', GetOnePoemController);
  
  // Better views 
  //angular.module('myApp').controller('AllPoemsController', AllPoemsController);
  angular.module('myApp').controller('AddPoemController', AddPoemController);
 
  // angular.module('myApp').controller('RegisterController', RegisterController);
  // angular.module('myApp').controller('LoginController', LoginController);
  // angular.module('myApp').controller('AllUsersController', AllUsersController);
    
  
  function PoemController($http) {
    
    var myModel = this;
    myModel.name = 'Poems';
    
    $http.get('/api/poems').then(function(response) {   // use .then instead of .success
        myModel.response = response;
       
      });
       
  }
 
   function GetOnePoemController($http, $routeParams) {
    var vm = this;   // vm ViewModel variable 
    console.log($routeParams);
    var id =  $routeParams.id; 
    
    $http.get('/api/poems/' + id)
      .then(function(response) {  
        vm.poems = response.data; 
       
      });
     
    //code to delete a record 
    vm.deletePoem = function() {
             
        $http.delete('/api/poems/' + $routeParams.id)       
             .then(function(response) {  
                console.log(response.status);
                window.location = "#/allpoems";   });
               
     }   
  }
 
  function AllPoemsController($http) {
    
    // for testing 
    var myModel = this;
    myModel.title = 'Poems';
    
    $http.get('/api/poems').then(function(response) {   // use .then instead of .success
        myModel.poems = response.data;
       
      });
       
  }
 
   function AddPoemController($http) {
     var vm = this;

     vm.addPoem = function() {
               
        //alert("inside the function");
        
        var postData = {
				name: vm.name,
				text: vm.text,
				tags: vm.tags
        };
    
        console.log(postData);
        $http.post('/api/poems/', postData).then(function(response) {
                vm.newpoem = response.data;
                console.log(response.status);
                window.location = "#/success";
      });
  };
 }
 

//register, login, and users

// function RegisterController($http) {
//   var vm = this;

//   vm.register = function() {
//     var user = {
//       username: vm.username,
//       password: vm.password,
//       name: vm.name
//     };

//     $http.post('/api/register', user).then(function(result) {
//           console.log(result); 
//           window.location = "#/allusers";});
//   }
// };

// function LoginController($http,$scope) {
//   var vm = this;

//   vm.login = function() {
//     console.log("logging in");
//     if (vm.username && vm.password) {
//        var user = {
//           username: vm.username,
//           password: vm.password
//         };

//         // post because we need to pass data user to the api controller
//         $http.post('/api/login', user).then(function(response) {
//               // response.data looks like {success: true, token: token, user: user}        
          
//                console.log(response.data.user);
              
//                 vm.isLoggedIn = true;
//                 vm.loginuser = response.data.user; 
              
//                window.location = "#/login";
//         });
//   } }

//     vm.logout = function() {
//       vm.isLoggedIn = false;
//       window.location = "#/login";
//     }

// } 
 
// function AllUsersController($http) {
    
//     var myModel = this;
//     myModel.title = 'Users';
    
//     $http.get('/api/users').then(function(response) {   
//         myModel.users = response.data;
       
//       });
       
//   }
 
})();