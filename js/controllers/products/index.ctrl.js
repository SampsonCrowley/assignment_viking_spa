vikingStore.controller('ProductIndexCtrl', [
  '$scope', '$stateParams', 'productService', 'cartService',
  function($scope, $stateParams, productService, cartService) {
    productService.all()
      .then(function(products) {
        $scope.products = products;
      })
  }
])
