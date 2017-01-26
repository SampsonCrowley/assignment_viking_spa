vikingStore.factory('cartService',[
  '$q',
  function($q){
    var _cart = {}, _count = 0;

    var newItemObj = function newItemObj(item){
      if(isNaN(item.id)){
        return false;
      }
      return {
        id: item.id,
        count: (item.quantity || 1)
      }
    }

    var addItem = function addItem(itemData){
      var item = newItemObj(itemData);
      if(item){
        if(!_cart[item.id]) _cart[item.id] = 0;
        _cart[item.id] += item.count;
        return true;
      }
    }

    var removeItem = function removeItem(item.id){
      delete _cart[item.id];
    }

    var listItems = function listItems(){

    }

    var itemCount = function itemCount(){

    }

    return {
      add: addItem,
      remove: removeItem,
      list: listItems,
      count: itemCount
    }
  }
])
