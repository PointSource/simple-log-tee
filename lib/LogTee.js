var util = require('util');

module.exports = LogTee;

/**
 * Creates a tee that writes to every stream in the array.
 *
 * @streams an array of WriteableStreams that will be written to
 */
function LogTee(streams) {
	this.streams = Array.isArray(streams) ? streams : [];
}

/**
 * Does a formatted write to the streams, similar to console.log().
 */
LogTee.prototype.log = function (data){
	var args = Array.prototype.slice.call(arguments, 0);
	this.streams.forEach(function (stream) {
		stream.write(util.format.apply(this, args) + '\n');
	});
};

/**
 * Does a direct write to the streams.
 */
LogTee.prototype.write = function (data) {
	this.streams.forEach(function (stream) {
		stream.write(data);
	});
};
