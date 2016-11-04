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

$scope.$on('update', function(event, params){
    list.total = 0;
    getItems();
  })

  list.deleteSelected = function(id) {
    console.log("delete");
    BackpackService.deleteItem(id, function(res){
    list.total = 0;
    getItems();

    });
  }

}

ItemsCtrl.$inject = ['$scope', 'BackpackService'];

})();