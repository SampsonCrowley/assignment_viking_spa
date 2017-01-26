var vikingStore = angular.module("vikingStore",['ui-router'])
  .constant('_', window._)

vikingStore.config(
  ['$stateProvider', '$urlRouterProvider'
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/products');

    $stateProvider
      .state('products', {
        url: '/products',
        abstract: true,
        template: '<div ui-view></div>'
      })
      .state('products.index' {
        url: '',
        templateUrl: '/js/views/products/index.html',
        controller: 'ProductIndexCtrl'
      })
  }
])
