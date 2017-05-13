var recipes = require('..models/recipes.js');

exports.get = function(req, res, next){
	recipes.find().exec(function(err,data){
		if(err){res.send('Error');}
		else{
			res.json(data);
		}
	});
	return next();
}