var factorial = require('../lib/factorial');
var events = require('events');
var nodeunit = require('nodeunit');

exports['read'] = nodeunit.testCase({
	setUp: function(callback) {
		this._openStdin = process.openStdin;
		this._log = console.log;
		this._exit = process.exit;
		this._calculate = factorial.calculate;
		var ev = this.ev = new events.EventEmitter();
		process.openStdin = function() {return ev;};
		callback();
	},
	tearDown: function(callback) {
		process.openStdin = this._openStdin;
		console.log = this._log;
		process.exit = this._exit;
		factorial.calculate = this._calculate;
		callback();
	},

	'a string' : function(test) {
		test.expect(1);

		process.exit = test.done;
		console.log = function(str) {
			test.equal(str, "Error: Can only calculate positive integers");
		};

		factorial.read();
		this.ev.emit('data', 'string');
	},

	'a number' : function(test) {
		test.expect(1);
		process.exit = test.done;
		console.log = function(str) {
			test.equal(str, "6");
		}

		factorial.read();
		this.ev.emit('data', '3');
	}
});

exports['calculate'] = function(test) {
	test.equal(factorial.calculate(3), 6);
	test.equal(factorial.calculate(0), 1);
	test.throws(function() { factorial.calculate(-1);  } );
	test.throws(function() { factorial.calculate(0.5);  } );
	test.throws(function() { factorial.calculate(1.5);  } );
	test.throws(function() { factorial.calculate(-1.5);  } );
	test.throws(function() { factorial.calculate('abc');  } );
	test.throws(function() { factorial.calculate('');  } );
	test.throws(function() { factorial.calculate(null);  } );
	test.throws(function() { factorial.calculate(true);  } );
	test.throws(function() { factorial.calculate(false);  } );
	test.throws(function() { factorial.calculate(undefined);  } );
	test.throws(function() { factorial.calculate([]);  } );
	test.throws(function() { factorial.calculate([3]);  } );
	test.done();
};

