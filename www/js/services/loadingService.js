/**
 * Created by usuario1 on 5/12/2017.
 */
angular
  .module('starter.services')
  .service('LoadingService',function($ionicLoading){

    var service = this;

    service.ShowLoading = ShowLoading;
    service.HideLoading = HideLoading;

    function ShowLoading() {
      $ionicLoading.show({
        template: '<ion-spinner></ion-spinner>',
        noBackdrop : true
      });
    }

    function HideLoading() {
      $ionicLoading.hide();
    }


  });
