# simple-log-tee

Log, and write, to multiple streams at the same time.

This is really handy for logging output to the console and to a file at the same time.

## usage

```javascript
var stee = require('simple-log-tee');

var doubleStd = new stee.LogTee([process.stdout, process.stderr]);
doubleStd.log('Double the fun?');
doubleStd.write(' ... ');
doubleStd.log('Maybe not.');

stee.teeToStdoutOnly().log('That\'s better.');

var dualRecorder = new stee.LogFileTee('test.log');
dualRecorder.log('Writing to "%s" and stdout.', dualRecorder.logfile);
```
