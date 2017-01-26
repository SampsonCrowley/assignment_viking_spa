vikingStore.controller('CartIndexCtrl', [
  '$scope', '$stateParams', 'cartService',
  function($scope, $stateParams, cartService) {
    cartService.list()
      .then(function(cartList) {
        $scope.cartList = cartList;
      })
  }
])
