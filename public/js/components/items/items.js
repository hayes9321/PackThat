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

  BackpackService.getAllItems(function(res){
    list.items = res.data;

    console.log(list.items);

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