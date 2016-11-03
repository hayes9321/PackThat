(function() {
angular.module("BackpackApp")
.component("addItem", {
  templateUrl: "js/components/add-item/add-item.html",
     controller: AddItem,
     controllerAs: "addItem"
   });
 
  function AddItem($state, BackpackService){
    var addItem = this;
    addItem.item = [];
      addItem.newItem = {
      itemName: " ",
      itemType: " ",
      description: " ",
      img: " ",
      weight: " "
     };

    addItem.updateItem = function(){
      
    BackpackService.addItem(addItem.newItem, function(res) {
      BackpackService.getAllItems(function(data) {
          addItem.item = data.data;
          $state.go('home', {}, {reload : true});
        });
      });
    }
  }
 
 
   AddItem.$inject = ["$state", "BackpackService"]
 })()
