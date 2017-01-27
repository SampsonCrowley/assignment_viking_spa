vikingStore.factory('cartService', [
  '$q', 'productService',
  function($q, productService){
    var _cart = {}, _count = { value: 0 };

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
        if(!_cart[item.id]) {
          _cart[item.id] = {
            id: item.id,
            count: 0,
            product: {}
          };
          getProduct(_cart[item.id]);
        }
        _count.value += item.count;
        _cart[item.id].count += item.count;
        return true;
      }
    }

    var getProduct = function getProduct(cartItem) {
      productService.find(cartItem.id).then(function(product) {
        cartItem.product = product;
      });
    }

    var removeItem = function removeItem(id){
      if (_cart[id]) {
        _count.value -= _cart[id].count;
        delete _cart[id];
        if (_count.value < 0) _count.value = 0;
      }
    }

    var listItems = function listItems(){
      return _cart;
    }

    var itemCount = function itemCount(){
      return _count;
    }

    var modifyItem = function modifyItem(id, direction){
      var value = (direction ? 1 : -1);
      _cart[id].count += value;
      _count.value += value;
      if(_cart[id].count <= 0){
        removeItem(id);
      }
    }

    return {
      add: addItem,
      remove: removeItem,
      list: listItems,
      count: itemCount,
      modify: modifyItem
    }
  }
])
