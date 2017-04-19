(function () {

  angular.module('myApp', ['ngRoute']).config(myConfig); 

  // $routeProvider allows to set up routes 
  function myConfig ($routeProvider) {
    $routeProvider
      .when('/writepoem', { 
          templateUrl: 'views/writepoem.jade',
          controller: 'writePoemController', controllerAs: 'writePoemCon' })
    }

})();