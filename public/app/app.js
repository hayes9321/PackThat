//I recommend changing the name 'MeanHackathon' to reflect your own project name
angular.module("BackpackApp", ["ui.router"])
.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider) {
  //This is what to do with an unknown state
  $urlRouterProvider.otherwise('/');

  //Your route definitions can be written here.
  $stateProvider.state("home", {
    url: "/",
    templateUrl: "app/views/home.html"
  });

  $locationProvider.html5Mode(true);
}]);
