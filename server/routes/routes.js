'use strict'

var path  = require('path');

module.exports = function(app) {

  app.get('/',function(req, res){
		res.sendFile(require('path').join(__dirname,'/public/index.html'));
	});
  // 404 route
	app.use(function(req, res, next) {
		res.sendFile('404.html', { root: path.join(__dirname, '../../public/404') });
	});

};
