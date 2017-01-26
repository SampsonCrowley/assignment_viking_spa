var vikingStore = angular.module("vikingStore",['ui.router'])
  .constant('_', window._)
  .value('vikingStoreNotification', null);

vikingStore.config([
  '$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/products');

    $stateProvider
      .state('products', {
        url: '/products',
        abstract: true,
        template: '<div ui-view></div>'
      })
      .state('products.index', {
        url: '',
        templateUrl: '/js/views/products/index.html',
        controller: 'ProductIndexCtrl'
      })
      .state('products.show', {
        url: '/:id',
        templateUrl: '/js/views/products/show.html',
        controller: 'ProductShowCtrl'
      })
      .state('cart', {
        url: '/cart',
        templateUrl: '/js/views/cart/index.html',
        controller: 'CartIndexCtrl'
      })
  }
])
vikingStore.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});
