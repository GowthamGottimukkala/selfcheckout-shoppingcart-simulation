var fs = require('fs');
var files = fs.readdirSync('/assets/photos/');

export default function read(callback) {
    var fs = require('fs');
    var files = fs.readdirSync('./images/');
    return callback(files);
  }