var ukrainianCoinsApi = require('ukrainian-coins-api');
var jsonfile = require('jsonfile');
var path = require('path');

function exportList (dir) {
	return ukrainianCoinsApi.getList().then(function(list) {
		return writeJsonToFile(list, path.join(dir, 'ukrainian-coins-list.json'));
	});
}

function exportCategories (dir) {
	return ukrainianCoinsApi.getСategories().then(function(categories) {
		return writeJsonToFile(categories, path.join(dir, 'ukrainian-coins-categories.json'));
	});
}

function exportDetails (dir) {
	return ukrainianCoinsApi.getListWithDetails().then(function(listWithDetails) {
		return Promise.all(listWithDetails.map(function(coin) {
			return writeJsonToFile(coin, path.join(dir, 'ukrainian-coins-details-' + coin.id + '.json'));
		}).concat(writeJsonToFile(listWithDetails, path.join(dir, 'ukrainian-coins-list-with-details.json'))));
	});	
}

function writeJsonToFile (obj, file) {
	return new Promise(function(resolve, reject){
		jsonfile.writeFile(file, obj, {spaces: 2}, function (err) {
		  if (err) {
		  	reject(err);
		  } else {
		  	resolve();
		  }
		});
	});
}

module.exports = {
	exportList: exportList,
	exportCategories: exportCategories,
	exportDetails: exportDetails
};