var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'school'
});


router.route('/students')
    .get(function (req, res) {
        console.log('Retrieve all students');
        connection.connect();
        connection.query('SELECT * FROM students',function (err,rows,fields) {
           if(err) throw err;
           res.json(rows);
        })
        connection.end();
        
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