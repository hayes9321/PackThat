(function(){
angular.module('BackpackApp')
.component('itemsList', {
  templateUrl: 'js/components/items/items.js',
  controller: ItemsCtrl,
  controllerAs: 'itemsList'
})

var primaryItems = [];
var secondaryItems = [];

function ItemsCtrl(BackpackService) {

  var list = this;
  list.items = BackpackService.getAllItems();

  // list.items.forEach(function(item) {
  //   if(item.itemType = 'primary') {
  //     primaryItems.push(item);
  //   } else {
  //     secondaryItems.push(item);
  //   }
  // }) 

}


ItemsCtrl.$inject = ['$scope', 'BackpackService'];

})()