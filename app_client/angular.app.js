(function () {

  angular.module('myApp', ['ngRoute']).config(myConfig); 

  // $routeProvider allows to set up routes 
  function myConfig ($routeProvider) {
    $routeProvider
      .when('/', {   template: '<p>A place for haikus</p>',  })

      .when('/success', { templateUrl: 'other/creation_successful.html'})

      .when('/about', { templateUrl: 'other/about.html'})

      .when('/writepoem', { 
          templateUrl: 'other/createhaiku.html',
          controller: 'AddPoemController', controllerAs: 'AddPoemCon' })

      .when('/poem/:id', {
    	  templateUrl: 'other/onepoem.html',
    	  controller: 'getOnePoemController', controllerAs: 'getOnePoemCon'})

      .when('/allpoems', {
        templateUrl:'other/allpoems.html',
        controller: 'PoemController', controllerAs: 'PoemController'})

      .otherwise( { redirectTo: '/'});  

}

})();