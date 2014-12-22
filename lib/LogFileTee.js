var fs = require('fs');
var path = require('path');

var LogTee = require('./LogTee');

module.exports = LogFileTee;

/**
 * Creates a LogTee that writes to a file "filename" and another stream (stdout by default).
 *
 * @param filename the name of the log file (if relative, it will be resolved from process.cwd())
 * @param stream2 the second stream to send output to
 *	(defaults to process.stdout, provide "null" to send output only to the file)
 */
function LogFileTee(filename, stream2) {
	var streams = [fs.createWriteStream(path.resolve(filename))];
	if (stream2 === undefined) {
		streams.push(process.stdout);
	} else if (stream2 !== null) {
		streams.push(stream2);
	}
	LogTee.call(this, streams);
	this.logfile = filename;
}

LogFileTee.prototype = Object.create(LogTee.prototype);
