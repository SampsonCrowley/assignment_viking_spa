vikingStore.filter('sumCart', [
  function(){
    return function(obj, calculator){
      calculator.value = 0;
      for (var i in obj) {
        calculator.value += obj[i].count * obj[i].product.price;
      }
      return obj;
    };
  }
]);
