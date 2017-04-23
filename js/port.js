//typing effect
document.addEventListener('DOMContentLoaded', function(){
    Typed.new('#typing-effect', {
      strings: ["Shweta Khare <br> HR Professional"],
      typeSpeed: 30
    });
});

//angular js
var app = angular.module('myapp', []);

app.controller('cont1', function($scope){
  $scope.h2="About Me";
});
