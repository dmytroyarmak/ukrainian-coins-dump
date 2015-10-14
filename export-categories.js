var ukrainianCoinsDumpExport = require('./lib/ukrainian-coins-dump-export');

ukrainianCoinsDumpExport.exportCategories('./dump').then(function() {
	process.exit();
}, function() {
	process.exit(1);
});