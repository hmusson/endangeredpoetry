(function() {

	angular.module('myApp').controller('writePoemController', writePoemController);
	angular.module('myApp').controller('getOnePoemController', getOnePoemController);
	

	function writePoemController($http) {
		var vm = this;
		vm.writePoem = function() {
			var postData = {
				name: vm.name,
				text: vm.text,
				tags: vm.tags
			};
			console.log(postData);
			$http.post('/api/poems', postData).then(function(response) {
				vm.writepoem = response.data;
				console.log(response.status);
				window.location = '#/'
			});
		};
	}

	function getOnePoemController($http, $routeParams) {
		var vm = this; 
		console.log($routeParams);
		var id = $routeParams.id;

		$http.get('/api/poems' + id)
			.then(function(response) {
				vm.poems = response.data;
			});
	}
}