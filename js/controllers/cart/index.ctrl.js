vikingStore.controller('CartIndexCtrl', [
  '$scope', '$stateParams', 'cartService', 'productService',
  function($scope, $stateParams, cartService) {
    $scope.total = {};
    $scope.cart = cartService.list();



    $scope.modifyItem = function modifyItem(id, direction){
      cartService.modify(id, direction);
    }
  }
])
