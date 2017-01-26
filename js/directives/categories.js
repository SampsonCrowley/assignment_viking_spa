vikingStore.directive("categories", [
  'categoryService',
  function(categoryService){
    var setup = function setup(s, e, a){
      s.model = "";
      s.categories = {};
      categoryService.all().then(function(categories){
        s.categories = categories;
      })
    }

    return {
      restrict: "E",
      scope: {
        model: "="
      },
      templateUrl: "js/directives/categories.html",
      link: setup
    }
  }
])
