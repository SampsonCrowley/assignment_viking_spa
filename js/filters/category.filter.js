vikingStore.filter('category', [
  function(){
    return function(arr, filter){
      if(!filter) return arr;
      var retArr = [];
      for (var i =0; i < arr.length; i++) {
        if(arr[i].category_id === +filter){
          retArr.push(arr[i])
        }
      }
      return retArr;
    };
  }
]);
