var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var path = require('path');
var assignments = require('../models/assignments');

/* GET /assignments listing. */
router.get('/', function(req, res, next) {
  assignments.find(function (err, assignments) {
    if (err) return next(err);
    res.json(assignments);
  });
});

/* POST /assignments*/
router.post('/', function(req, res, next) {
    console.log(req.body);
    assignments.create(req.body, function (err, post) {
        if (err) return next(err);
        res.redirect(path.resolve('/'));
    });
});

/* PUT /assignments/:id */
router.put('/:id', function(req, res, next) {
  assignments.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /assignments/:id */
router.delete('/:id', function(req, res, next) {
  assignments.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
