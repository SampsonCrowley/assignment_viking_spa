vikingStore.factory('notificationService', [
  '$timeout', 'vikingStoreNotification',
  function($timeout, vikingStoreNotification){
    var notify = function(msg) {
      vikingStoreNotification = msg;
      $timeout(function() {
        vikingStoreNotification = null;
      }, 2000);
    }

    return notify; 
  }
])
