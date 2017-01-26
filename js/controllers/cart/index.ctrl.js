vikingStore.controller('CartIndexCtrl', [
  '$scope', '$stateParams', 'cartService', 'productService',
  function($scope, $stateParams, cartService) {
    $scope.cart = cartService.list()      
  }
])
