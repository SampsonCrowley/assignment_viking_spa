vikingStore.directive('notification', [
  'notificationService',
  function(notificationService){
    var notifySetup = function notifySetup(s){
      s.notification = notificationService.notice();
    }
    return{
      restrict: 'E',
      scope:{},
      templateUrl: 'js/directives/notification.html',
      link: notifySetup
    }
  }
])
