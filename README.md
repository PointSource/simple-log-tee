# simple-log-tee

Log, and write, to multiple streams at the same time.

This is really handy for logging output to the console and to a file at the same time.

## usage

```javascript
var stee = require('simple-log-tee');

var doubleStd = stee.createLogTee([process.stdout, process.stderr]);
doubleStd.log('Double the fun?');
doubleStd.write(' ... ');
doubleStd.log('Maybe not.');

stee.teeToStdoutOnly().log('That\'s better.');
stee.teeToNowhere().write('But this is going nowhere!');

var dualRecorder = stee.createLogFileTee('test.log');
dualRecorder.log('Writing to "%s" and stdout.', dualRecorder.logfile);

var fileOnly = stee.createLogFileTee('t2.log', null);
fileOnly.write('one line, only in ' + fileOnly.logfile);
```
