vikingStore.factory('notificationService', [
  '$timeout',
  function($timeout){
    var notice = {}, handler;
    var notify = function(msg) {
      if(handler) $timeout.cancel(handler);

      notice.msg = null;

      $timeout(function() {
        notice.msg = msg;
        handler = $timeout(function() {
          notice.msg = null;
        }, 2000);
      }, 50);
    }
    notify.notice = function(){
      return notice;
    };

    return notify;
  }
])
