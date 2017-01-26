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
        _count += item.count;
        return true;
      }
    }

    var removeItem = function removeItem(id){
      _count -= _cart[id];
      delete _cart[id];
    }

    var listItems = function listItems(){
      return _cart;
    }

    var itemCount = function itemCount(){
      return _count;
    }

    return {
      add: addItem,
      remove: removeItem,
      list: listItems,
      count: itemCount
    }
  }
])
