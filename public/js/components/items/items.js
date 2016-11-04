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

  list.totalPounds = 35;

  getItems();

  function getItems() {

  BackpackService.getAllItems(function(res){
    list.items = res.data;
    console.log(list.items);

    list.items.forEach(function(item){
      list.total += item.weight;
      console.log(list.total);
    })


  });

  }

  list.deleteSelected = function(id) {
    console.log("delete");
    BackpackService.deleteItem(list.params.id, function(res){

    getItems();

    });
  }

}


ItemsCtrl.$inject = ['$scope', 'BackpackService'];

})();