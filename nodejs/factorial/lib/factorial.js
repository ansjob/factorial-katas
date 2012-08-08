
/* Simple lib for calculating factorial in JS */

/* To import the bigint library */
var fs = require('fs');
var vm = require('vm');
var includeInThisContext = function(path) {
    var code = fs.readFileSync(path);
    vm.runInThisContext(code, path);
}.bind(this);
includeInThisContext(__dirname+"/BigInt.js");

exports.calculate = function(n) {
	if (isPositiveInt(n))
	{
		var factorial = str2bigInt('1', 10, 0);
		for (var idx = 1; idx <= n; ++idx) {
			var multiplier = str2bigInt('' + idx, 10, 0);
			factorial = mult(factorial, multiplier);
		}
		return bigInt2str(factorial, 10);
	}
	else {
		throw new Error("Can only calculate positive integers");
	}
}
exports.read = function() {
	var stdin = process.openStdin();
	stdin.on('data', function(n) {
		try {
			n = parseFloat(n);
			console.log(exports.calculate(n));
		} catch (e) {
			console.log(e);
		}
	});
}


/* Ensures that we only start crunching valid numbers... */
function isPositiveInt(n) {
	return typeof n === 'number' && n % 1 == 0 && n >= 0;
}
