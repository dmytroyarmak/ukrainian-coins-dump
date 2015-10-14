var jsonfile = require('jsonfile');
var path = require('path');

function getCategories () {
	return readJsonFromFile('../dump/ukrainian-coins-categories.json');
}

function getList () {
	return readJsonFromFile('../dump/ukrainian-coins-lisr.json');
}
function getDetails (id) {
	return readJsonFromFile('../dump/ukrainian-coins-details-' + id + '.json');
}
function getListWithDetails () {
	return readJsonFromFile('../dump/ukrainian-coins-list-with-details.json');
}

function readJsonFromFile (file) {
	return new Promise(function(resolve, reject){
		jsonfile.readFile(path.join(__dirname, file), function (err, obj) {
		  if (err) {
		  	reject(err);
		  } else {
		  	resolve(obj);
		  }
		});
	});
}

module.exports = {
  getCategories: getCategories,
  getList: getList,
  getDetails: getDetails,
  getListWithDetails: getListWithDetails
};