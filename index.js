var LogTee = require('./lib/LogTee');
var LogFileTee = require('./lib/LogFileTee');

var stdoutOnlyTee = new LogTee([process.stdout]);
exports.teeToStdoutOnly = function () {
	return stdoutOnlyTee;
};

var emptyTee = new LogTee([]);
exports.teeToNowhere = function () {
	return emptyTee;
};

exports.createLogTee = function (streams) {
	return new LogTee(streams);
};

exports.createLogFileTee = function (filename, stream2) {
	return new LogFileTee(filename, stream2);
};
