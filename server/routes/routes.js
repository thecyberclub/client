'use strict'

var path  = require('path');

module.exports = function(app) {

  app.get('/',function(req, res){
		res.sendFile(require('path').join(__dirname,'/public/index.html'));
	});

};
