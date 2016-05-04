var casper = require('casper').create();
var utils = require('utils');
var system = require('system');

var entity = JSON.parse(casper.cli.get('entity'));

var result = new Object();
result.scraperId = guid();
result.entity = entity;
result.entity.id = Math.floor(Math.random() * 1000) + 1;

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
