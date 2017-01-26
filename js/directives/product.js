vikingStore.directive('product', ['cartService', 'notificationService',
  function(cartService, notificationService) {
    var setup = function(s) {
      s.addToCart = function() {
        if (cartService.add(s.product)) {
          notificationService('Item added to cart.');
        }
      }
    }

    return {
      restrict: 'A',
      scope: {
        product: '='
      },
      templateUrl: '/js/directives/product.html',
      link: setup
    }
  }
])
