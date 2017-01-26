vikingStore.directive('product',
  function() {
    return {
      restrict: 'A',
      scope: {
        product: '='
      },
      templateUrl: '/js/directives/product.html'
    }
  }
)
