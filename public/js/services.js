angular.module('BackpackApp')
.service('BackpackService', ['$http', function($http){

  this.getAllItems = function(callback) {
    $http({
      url: '/api/items',
      method: 'GET'
    }).then(function success(res) {
      callback(res);
    }, function error(res) {
      console.log(res);
    });
  }

  this.addItem = function(itemData, callback) {
    $http.post('/api/items', itemData).then(function success(res) {
      callback(res);
    }, function error(res) {
      console.log(res);
    });
  }

  this.getItem = function(itemId, callback) {
    $http.get('/api/items' + itemId).then(function success(res) {
      callback(res);
    }, function error(res) {
      console.log(res);
    });
  }

  this.updateItem = function(itemData, itemId, callback) {
    $http.put('/api/items' + itemId, itemData).then(function success(res) {
      callback(res);
    }, function error(res) {
      console.log(res);
    });
  }

  this.deleteItem = function(itemId, callback) {
    $http.delete('/api/items/' + itemId).then(function success(res) {
      callback(res);
    }, function error(res) {
      console.log(res);
    });
  }
}]);