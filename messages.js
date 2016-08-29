var config = require('./config.json');
var colors = require('colors');
//get file locations 
var xamppLocation = config.xampp_vhost_directory;
var hostsLocation = config.hosts_directory;

var userArg1 = process.argv.slice(2)[0];
var userArg2 = process.argv.slice(3)[0];


var exports = module.exports = {};
var noArgumentError1 = function() {
	console.log('No hostname argument passed. Call as: "vhost'.cyan , 'mydevsite.dev'.yellow , 'mysite/wordpress"'.cyan);
};

var noArgumentError2 = function() {
	console.log('No folder argument passed. Call as: "vhost mydevsite.dev'.cyan,  'mydevsite/wordpress'.yellow , '"'.cyan);
};

var hostTaken = function(){
	console.log("Hostname ".cyan + colors.yellow(userArg1) + " is already taken.".cyan);
}

var folderTaken = function(){
	console.log("Folder ".cyan + colors.yellow(userArg2) + " is already taken.".cyan);
}

var successTitle = function(){
	console.log('--------------------------------------------------------------------------------'.green );
	console.log("                                     SUCCESS!".green );
	console.log('--------------------------------------------------------------------------------'.green );
}

var errorTitle = function(){
	console.log('--------------------------------------------------------------------------------'.red );
	console.log("                                      ERROR!".red );
	console.log('--------------------------------------------------------------------------------'.red );
}

var xamppAdded = function(){
	console.log("Virtualhost added to XAMP".cyan );
	console.log(xamppLocation);
}

var hostAdded = function(){
	console.log("Virtualhost added to System32".cyan );
	console.log(hostsLocation);
}


var allSet = function(){
	console.log("All set. Please restart XAMPP Apache server.".cyan);
}

exports.noArgumentError1 = noArgumentError1;
exports.noArgumentError2 = noArgumentError2;
exports.hostAdded = hostAdded;
exports.hostTaken = hostTaken;
exports.successTitle = successTitle;
exports.errorTitle = errorTitle;
exports.xamppAdded = xamppAdded;
exports.folderTaken = folderTaken;
exports.allSet = allSet;
