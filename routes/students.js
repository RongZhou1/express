var express = require('express');
var router = express.Router();



router.route('/students')
    .get(function (req, res) {
        res.send('Retrieve all students');
    })
    .post(function (req, res) {
        res.send('Add a student');
    });

router.route('/students/:id')
    .get(function (req, res) {
        res.send('Retrieve a student');
    })
    .put(function (req, res) {
        res.send('Modify a student');
    })
    .delete(function (req, res) {
        res.send('Delete a student');
    });


module.exports = router;