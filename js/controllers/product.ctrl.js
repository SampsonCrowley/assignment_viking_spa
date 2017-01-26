vikingStore.controller('ProductIndexCtrl', [
  '$scope', '$stateParams', 'productService',
  function($scope, $stateParams, productService) {
    productService.all()
      .then(function(products) {
        $scope.products = products;
      })
  }
])
