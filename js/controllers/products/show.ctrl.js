vikingStore.controller('ProductShowCtrl', [
  '$scope', '$stateParams', 'productService', 'cartService',
  function($scope, $stateParams, productService, cartService) {
    productService.find($stateParams.id)
      .then(function(product) {
        $scope.product = product;
      })
  }
])
