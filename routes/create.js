var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var path = require('path');
var assignments = require('./assignments');

/* GET create page. */
router.get("/", function(req,res,next){
    res.sendFile(path.resolve(__dirname, '../views/create.html'));
});

router.use('/', assignments);

module.exports = router;