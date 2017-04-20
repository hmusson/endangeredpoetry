(function () {

  angular.module('myApp', ['ngRoute']).config(myConfig); 

  // $routeProvider allows to set up routes 
  function myConfig ($routeProvider) {
    $routeProvider
      .when('/writepoem', { 
          templateUrl: 'views/writepoem.jade',
          controller: 'writePoemController', controllerAs: 'writePoemCon' })
    

    .when('/poem/:id', {
    	  templateUrl: 'views/one_poem.jade',
        //TODO: make one_poem.jade file
    	  controller: 'getOnePoemController', controllerAs: 'getOnePoemCon'
    })
}

})();