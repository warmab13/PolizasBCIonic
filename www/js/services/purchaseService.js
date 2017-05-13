angular
  .module('starter.services')
  .service('PurchaseService',function($http,SERVER){
    var service = this;

    service.getPurchases = getPurchases;
    service.getRecentPurchases = getRecentPurchases;

    function getPurchases(){
      return $http
        .get(SERVER.base_url + SERVER.purchases_url)
        .then(function(data){
          return data.data;
        })
    }

    function getRecentPurchases(){
       return $http
        .get(SERVER.base_url + SERVER.recent_purchases_url)
        .then(function(data){
          return data.data;
        })
    }
    return service;

  });
