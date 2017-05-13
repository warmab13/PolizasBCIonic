angular.module('starter.controllers')
.controller('LoginCtrl',function($scope,UserService,$ionicPopup){

  $scope.validateLogin = function(user){

  	if(!user.username || !user.password){
  		console.log('Espacios vacios');
  		var alertPopup = $ionicPopup.alert({
	     title: 'Rellena los campos',
	     template: 'Asegurate de no dejar campos vacios'
	   	});
  		return;
  	}

    UserService.validateUser(user)
      .then(function(data){
        console.log(data);
      })
      .catch(function(error){
        
      	var alertPopup = $ionicPopup.alert({
	     title: 'Usuario incorrecto',
	     template: 'Por favor verifica tu usuario'
	   	});

      })
  }
})