var ukrainianCoinsDumpExport = require('./lib/ukrainian-coins-dump-export');

ukrainianCoinsDumpExport.exportDetails('./dump').then(function() {
	process.exit();
}, function() {
	process.exit(1);
});