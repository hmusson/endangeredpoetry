(function () {

  angular.module('myApp', ['ngRoute']).config(myConfig); 

  // $routeProvider allows to set up routes 
  function myConfig ($routeProvider) {
    $routeProvider
      .when('/', {   template: '<p>This is the root page /  </p>',  })

      .when('/about', { templateUrl: 'other/about.html'})


      .when('/writepoem', { 
          templateUrl: 'other/createhaiku.html',
          controller: 'writePoemController', controllerAs: 'writePoemCon' })
    

      .when('/poem/:id', {
    	  templateUrl: 'other/onepoem.html',
        //TODO: make one_poem.jade file
    	  controller: 'getOnePoemController', controllerAs: 'getOnePoemCon'})

      .otherwise( { redirectTo: '/'});  

}

})();