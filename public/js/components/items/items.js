(function(){
angular.module('BackpackApp')
.component('itemsList', {
  templateUrl: 'js/components/items/items.html',
  controller: ItemsCtrl,
  controllerAs: 'itemsList'
})

var primaryItems = [];
var secondaryItems = [];

function ItemsCtrl($scope, BackpackService) {

  var list = this;
  BackpackService.getAllItems(function(res){
    list.items = res.data;

  //   list.items.forEach(function(item) {
  //   if(item.itemType = 'primary') {
  //     primaryItems.push(item);
  //   } else {
  //     secondaryItems.push(item);
  //   }
  // }) 
  //   console.log(list.items);
    
  });


  var deleteSelected = function(id) {
    console.log("deleted!");
    BackpackService.deleteItem(id);
  }



  // list.items


}

ItemsCtrl.$inject = ['$scope', 'BackpackService'];

})();