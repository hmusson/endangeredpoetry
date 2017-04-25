
<div ng-app="myApp" ng-controller="haikuCtrl">

First Line: <input type="text" ng-model="firstline"><br>
Second Line: <input type="text" ng-model="secondline"><br>
Third Line: <input type="text" ng-model="thirdline"><br>

<br>
{{firstline}}<br>

{{secondline}}<br>

{{thirdline}}<br>
<br>
</div>

<script>
var app = angular.module('myApp', []);
app.controller('haikuCtrl', function($scope) {
    $scope.firstline= "";
    $scope.secondine= "";
    $scope.thirdline= "";
});
</script>
