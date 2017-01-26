vikingStore.controller('ProductShowCtrl', [
  '$scope', '$stateParams', 'productService',
  function($scope, $stateParams, productService) {
    productService.find($stateParams.id)
      .then(function(product) {
        $scope.product = product;
      })
  }
])
