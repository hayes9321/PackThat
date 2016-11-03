(function() {
angular.module("BackpackApp")
.component("addItem", {
  templateUrl: "app/components/add-item/add-item.html",
     controller: AddItem,
     controllerAs: "addItem"
   });
 
   function addItem(BackpackService, $state) {
     var addItem = this;
 
     addItem.newItem = {
       itemName: " ",
       itemType: " ",
       description: " ",
       img: " ",
       weight: " "
     };
 
     addItem.updateItem = function() {
       BackpackService.addItem(addItem.newItem);
       $state.go("/");
     };
   };
 
 
   AddItem.$inject = ["BackpackService", "$state"]
 })()
