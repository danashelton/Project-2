const express = require('express');
const path = require('path');

const router = express.Router();
var connection = require("../config/connection.js");


router.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/pages/home.html"));
});

router.get("/add", function(req, res){
    res.sendFile(path.join(__dirname, "../public/pages/add_animal.html"));
});


router.get("/zoo", function(req, res) {

    console.log(req.query)
    res.render("index", req.query);

});

//TODO: use this route to display animal.handlebars page from the index.handlebars page
//When user clicks on the Mate button
router.get("/animal", function(req, res) {

    console.log(req.query)
    res.render("animal", req.query);

});

module.exports = router;