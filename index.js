var LogTee = require('./lib/LogTee');

var stdoutOnlyTee = new LogTee([process.stdout]);
exports.teeToStdoutOnly = function () {
	return stdoutOnlyTee;
};

var emptyTee = new LogTee([]);
exports.teeToNowhere = function () {
	return emptyTee;
};

exports.LogTee = LogTee;
exports.LogFileTee = require('./lib/LogFileTee');
