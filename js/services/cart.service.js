vikingStore.factory('cartService', [
  '$q', 'productService',
  function($q, productService){
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
        if(!_cart[item.id]) {
          _cart[item.id] = {
            id: item.id,
            count: 0,
            product: {}
          };
          getProduct(_cart[item.id]);
          _count += 1;
        }
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
        _count -= 1;
        delete _cart[id];
        if (_count < 0) _count = 0; 
      }
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
