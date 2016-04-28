var casper = require('casper').create();
var utils = require('utils');
entity = JSON.parse(casper.cli.get('entity'));

var system = require('system');
entity.id = "dockerId";
system.stdout.writeLine(JSON.stringify(entity));

casper.exit();
