var Horseman = require('D:/slimerTest/node_modules/node-horseman');
var horseman = new Horseman();
 
horseman
  .userAgent('Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0')
  .open('http://www.google.lk')
  .type('input[name="q"]', 'Chrome')
  .click('[name="btnK"]')
  .waitForSelector('div.g')
   .count('div.g')
  .log() // prints out the number of results 
  .log("Test Completed...")
  .close();