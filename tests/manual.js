#!/usr/bin/env node

// this is the sample from README.md (except we source locally)
var stee = require('../');

var doubleStd = stee.createLogTee([process.stdout, process.stderr]);
doubleStd.log('Double the fun?');
doubleStd.write(' ... ');
doubleStd.log('Maybe not.');

stee.teeToStdoutOnly().log('That\'s better.');
stee.teeToNowhere().write('But this is going nowhere!');

var dualRecorder = stee.createLogFileTee('test.log');
dualRecorder.log('Writing to "%s" and stdout.', dualRecorder.logfile);

var recordStream = dualRecorder.getFileStream();
recordStream.write('This is SECRET and only going in the file!\n');

var fileOnly = stee.createLogFileTee('t2.log', null);
fileOnly.write('one line, only in ' + fileOnly.logfile);
