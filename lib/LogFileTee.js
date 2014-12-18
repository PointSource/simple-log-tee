var fs = require('fs');
var path = require('path');

var LogTee = require('./LogTee');

module.exports = LogFileTee;

/**
 * Creates a LogTee that writes to a file "filename" and stdout.
 *
 * @param filename the name of the log file (if relative, it will be resolved from process.cwd())
 */
function LogFileTee(filename) {
	LogTee.call(this, [fs.createWriteStream(path.resolve(filename)), process.stdout]);
	this.logfile = filename;
}

LogFileTee.prototype = Object.create(LogTee.prototype);
