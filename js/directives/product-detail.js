vikingStore.directive('productDetail', ['cartService', 'notificationService',
  function(cartService, notificationService) {
    var setup = function(s) {
      s.newItem = {};
      s.addToCart = function() {
        s.newItem.id = s.product.id;
        if (cartService.add(s.newItem)) {
          s.newItem.quantity = 0;
          notificationService('Item added to cart.');
        }
      }
    }

    return {
      restrict: 'E',
      scope: true,
      templateUrl: 'js/directives/product-detail.html',
      link: setup
    }
  }
])
