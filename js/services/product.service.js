vikingStore.factory('productService', [
  '$http', '$q', '_',
  function($http, $q, _){
    var _products = {};

    var getProducts = function() {
      if (_.isEmpty(_products)) {
        return $http.get('/data/products.json')
          .then(function(response) {
            angular.copy(response.data, _products);
            return _products;
          });
      }

      return $q(function(resolve) {
        resolve(_products);
      });
    }

    var findProduct = function findProduct(id){
      return _products[id];
    }

    var getProduct = function getProduct(id) {
      if (_.isEmpty(_products)) {
        return getProducts().then(function(){
          return findProduct(id)
        })
      }

      return $q(function(resolve) {
        resolve(findProduct(id));
      });
    }

    return {
      all: getProducts,
      find: getProduct
    }
  }
])
