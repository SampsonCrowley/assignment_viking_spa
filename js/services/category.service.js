vikingStore.factory('categoryService', [
  '$http', '$q', '_',
  function($http, $q, _){
    var _categories = {};

    var getCategories = function getCategories() {
      if (_.isEmpty(_categories)) {
        return $http.get('/data/categories.json')
          .then(function(response) {
            angular.copy(response.data, _categories);
            return _categories;
          });
      }

      return $q(function(resolve) {
        resolve(_categories);
      });
    }

    return {
      all: getCategories
    }
  }
])
