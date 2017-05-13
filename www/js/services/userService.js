angular
  .module('starter.services')
  .service('UserService',function($q,$localstorage,$state,$timeout,LoadingService){
    var service = this;

    service.validateUser = validateUser;
    service.clearSession = clearSession;
    service.isLogged = isLogged;

    function validateUser(user){
      var defer = $q.defer();

      LoadingService.ShowLoading();

      return $timeout(function(){
        if(dummyUser.username === user.username && dummyUser.password === user.password){
          setSession(user);
          redirectHome();
          LoadingService.HideLoading();
          defer.resolve(true);
        }else {
          LoadingService.HideLoading();
          defer.reject('User not valid');
        }

        return defer.promise;
      },2000);


    }

    function setSession(user){
        $localstorage.setObject('user',{username: user.username});
    }

    function redirectLogin(){
      $state.go('login');
    }

    function redirectHome(){
      $state.go('tab.purchases');
    }

    function clearSession(){
      LoadingService.ShowLoading();
      $timeout(function(){
        $localstorage.setObject('user',{});
        redirectLogin();
        LoadingService.HideLoading();
      },1000);

    }
    function isLogged(){
      var user = $localstorage.getObject('user');
        if(user.username){
          return true;
        }
        return false;
    }

  });

  var dummyUser = {
    username : 'gleish',
    password : '123456'
  };
