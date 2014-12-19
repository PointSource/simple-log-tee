var LogTee = require('./lib/LogTee');

var stdoutOnlyTee = new LogTee([process.stdout]);
exports.teeToStdoutOnly = function () {
	return stdoutOnlyTee;
};

exports.LogTee = LogTee;
exports.LogFileTee = require('./lib/LogFileTee');
