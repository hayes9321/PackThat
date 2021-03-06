(function() {
angular.module("BackpackApp")
.component("addItem", {
  templateUrl: "js/components/add-item/add-item.html",
     controller: AddItem,
     controllerAs: "addItem"
   });
 
  function AddItem($state, $rootScope, BackpackService){
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

          $rootScope.$broadcast('update', true);

          addItem.on = false;

          addItem.newItem = {
          itemName: " ",
          itemType: " ",
          description: " ",
          img: " ",
          weight: " "
          };

        });
      });
    }

    addItem.on = 'false';

    addItem.displayForm = function(boolean){
      addItem.on = boolean;
    }


  }
 
 
   AddItem.$inject = ["$state", "$rootScope", "BackpackService"]
 })()