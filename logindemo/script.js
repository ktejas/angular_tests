var app = angular.module('demo', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'template.html',
      controller:'Ctrl'
    })
    // route for the welcome/dashboard page
    .when('/welcome/:userName', {
      templateUrl: 'welcome.html',
      controller: 'welcomeCtrl'
    })
    // route for the forgot/Recover password page
    .when('/forgotPass', {
      templateUrl: 'forgotPass.html',
      controller: 'forgotPassCtrl'
    })
    //fallback url if nothing matches
    .otherwise({
      redirectTo: '/home'
    })
}]);

app.controller("Ctrl", function($scope, $routeParams, $location) {
  $scope.userName ="";
  $scope.pass="";
  $scope.loginErr = "";
  
  $scope.submit = function() {
    if($scope.userName === "username" && $scope.pass === "password"){
      $scope.loginErr = "";
      $location.path("/welcome/" + $scope.userName );
    }
    else {
      $scope.loginErr = "Wrong username or password!!!";
      $scope.userName = "";
      $scope.pass = "";
    }
  };
  // do other stuff
});

//controller for welcome page
app
  .controller('welcomeCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {

      $scope.username = $routeParams.userName ;

    }
  ]);

//controller for forgot password page
app
  .controller('forgotPassCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {
      $scope.title = "Recover passsword page";



    }
  ]);