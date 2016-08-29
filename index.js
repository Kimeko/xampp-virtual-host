#! /usr/bin/env node

var fs = require('fs');
var colors = require('colors');
var config = require('./config.json');
var messages = require('./messages.js');

//get file locations 
var xamppLocation = config.xampp_vhost_directory;
var xampp_files_dir = config.xampp_files_directory;
var hostsLocation = config.hosts_directory;
var hostsIp = config.hosts_ip_address;
var xamppPort = config.xampp_apache_port;

//arguments list
var userArg1 = process.argv.slice(2)[0];
var userArg2 = process.argv.slice(3)[0];

if(userArg1 == undefined || userArg2 == undefined) {
	messages.errorTitle();
}

if(userArg1 == undefined) {
	messages.noArgumentError1();
}
if(userArg2 == undefined) {
	messages.noArgumentError2();
}
if (userArg1 != undefined && userArg2 != undefined ) {	
	checkAvailability();
}


function checkAvailability(){

	fs.readFile(xamppLocation, 'utf8', function (err,data) {
		if (err) {
			return console.log(err);
		}
		if(data.indexOf(userArg1) > -1 ){
			messages.hostTaken();
		} else if(data.indexOf(userArg2) > -1 ){
			messages.folderTaken();
		} else{
			appendHosts();
		}
	});

}


//if has both arguments
function appendXampp(){


	var newVirtualHost = '\r\n\r\n\r\n' +
	"<VirtualHost *:80>" + '\r\n' +
	'DocumentRoot "' + xampp_files_dir + userArg2 + '"' + '\r\n' +
	"ServerName "+ userArg1 + '\r\n' +
    '<Directory "' + xampp_files_dir + userArg2 +'">' + '\r\n' +
	"Order allow,deny" + '\r\n' +
	"Allow from all" + '\r\n' +
	"</Directory>" + '\r\n' +
	"</VirtualHost>";


	fs.appendFile(xamppLocation,  newVirtualHost, 'utf8', function (err, data) {
		if (err) {
	    	return console.log( colors.red(err));
		}
		messages.xamppAdded();
		messages.allSet();
		
	});
}

function appendHosts(){

	var newHostIP = '\r\n' + "        " + hostsIp + "       " + userArg1;
	fs.appendFile(hostsLocation, newHostIP , 'utf8', function (err, data) {
		if (err) {
			if (err.code == "EPERM"){
				return console.log( colors.red(err), "Please run Git BASH with Admin rights.".cyan);
			} else {
				return console.log( colors.red(err));
			}
	    	
		}
		messages.successTitle();
		messages.hostAdded();
		//if was successful append hosts file too
		appendXampp();
	});
}
