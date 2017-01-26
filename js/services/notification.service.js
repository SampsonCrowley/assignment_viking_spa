vikingStore.factory('notificationService', [
  '$timeout',
  function($timeout){
    var notice = {}
    var notify = function(msg) {
      notice.msg = null;
      $timeout(function() {
        notice.msg = msg;
        $timeout(function() {
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
