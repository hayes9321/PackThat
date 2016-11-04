(function(){
angular.module('BackpackApp')
.component('itemsList', {
  templateUrl: 'js/components/items/items.html',
  controller: ItemsCtrl,
  controllerAs: 'itemsList'
})

function ItemsCtrl($scope, BackpackService) {

  var list = this;

  list.selected = "";

  list.total = 0;

  BackpackService.getAllItems(function(res){
    list.items = res.data;
    console.log(list.items);

    list.items.forEach(function(item){
      list.total += item.weight;
      console.log(list.total);
    })


  });

  var deleteSelected = function(id) {
    console.log("delete");
    BackpackService.deleteItem(id);
  }

  // var updateSelected = function(id) {
  //   BackpackService.updateItem(id);
  // }

}



ItemsCtrl.$inject = ['$scope', 'BackpackService'];

})();