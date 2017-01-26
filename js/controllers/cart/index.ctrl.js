vikingStore.controller('CartIndexCtrl', [
  '$scope', '$stateParams', 'cartService', 'productService',
  function($scope, $stateParams, cartService) {
    cartService.list()
      .then(function(cartList) {
        $scope.cartList = cartList;
      })
    productService.all().then
  }
])
