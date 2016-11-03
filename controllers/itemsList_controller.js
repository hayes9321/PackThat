var express = require('express');
var ItemsList = require('../models/itemsList.js');
var router = express.Router();

//this route targets all items
router.route('/')
.get(function(req, res) { //
  ItemsList.find(function(err, items) {
    if(err) {
      return res.status(500).send(err); 
    }

    return res.send(items);
  });
})
.post(function(req, res) {
  console.log(req.body);
  ItemsList.create(req.body, function(err, item) {
    if(err) {
      return res.status(500).send(err); 
    }
    res.send(item);
  });
});

//this route targets individual items
router.route('/:id')
.get(function(req, res) {
  ItemsList.findOne({_id: req.params.id}, function(err, item) {
    if(err) {
      return res.status(500).send(err); 
    }

    res.send(item);
  });
})
.put(function(req, res) {
  
  ItemsList.findByIdAndUpdate(req.params.id, req.body, function(err, item) {
    if(err) {
      return res.status(500).send(err); 
    }
    res.send(item);
  });
})
.delete(function(req, res) {
  ItemsList.remove({_id: req.params.id}, function(err, item) {
    res.send(item);
  });
});

module.exports = router;