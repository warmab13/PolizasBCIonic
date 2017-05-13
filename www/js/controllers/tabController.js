angular
	.module('starter.controllers')
	.controller('TabCtrl',function($scope,UserService,LoadingService){

		$scope.logOut = function(){
			UserService.clearSession();
		};


		/*
      Spinner management
		 */

    $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      if (toState.resolve) {
        LoadingService.ShowLoading();
      }
    });
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      if (toState.resolve) {
        LoadingService.HideLoading();
      }
    });
	});
