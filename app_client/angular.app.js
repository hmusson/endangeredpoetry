(function () {

  angular.module('myApp', ['ngRoute']).config(myConfig); 

  // $routeProvider allows to set up routes 
  function myConfig ($routeProvider) {
    $routeProvider
      .when('/', {   template: '<img src="http://thecrocodile.org/new_site/wp-content/uploads/2016/11/cloud-08.jpg" alt="little cloud" style="width:210px;height:135px;"><h3>A place for haikus</h3>',  })

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