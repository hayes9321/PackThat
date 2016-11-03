(function(){
angular.module('BackpackApp')
.component('packItem', {
  template: '<h1>Hello</h1>',
  controller: PackItemCtrl,
  controllerAs: 'packItem'
	});

	function PackItemCtrl(){
		console.log('hello');
	}
})()
