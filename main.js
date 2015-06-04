var executor = require('./executor.js');
var utils = require('./utils/addressbook_utils');
var arg = process.argv[2];
if(utils.checkEmpty(arg)){
	executor.execute('');
}else if(parseInt(arg) == 0){
	var retval = executor.execute(global.operationOldest);
	executor.printOutput(retval);
}