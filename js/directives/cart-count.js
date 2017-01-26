vikingStore.directive('cartCount', ['cartService',
  function(cartService) {
    var setup = function(s) {
      s.count = cartService.count();
    }

    return {
      restrict: 'A',
      scope: {},
      template: '{{ count.value }}',
      link: setup
    }
  }
])
