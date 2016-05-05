var casper = require('casper').create();
var utils = require('utils');
var system = require('system');
var fs = require('fs');

var entity = JSON.parse(casper.cli.get('entity'));
var configuration = JSON.parse(casper.cli.get('configuration'));
console.log("Scraping " + JSON.stringify(configuration));

var result = new Object();
result.scraperId = guid();
result.entity = entity;
result.entity.id = Math.floor(Math.random() * 1000) + 1;

var file = casper.cli.get('output');
if (file)
  fs.write(file, JSON.stringify(result));
else
  system.stdout.writeLine(JSON.stringify(result));

casper.exit();

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}
