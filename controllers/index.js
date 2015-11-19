"use strict";

var config = require('../config');
exports.index = function(req,res,next){
        res.render('index.html');	
}
exports.geo = function(req,res,next){
        res.render('geo.html');	
}