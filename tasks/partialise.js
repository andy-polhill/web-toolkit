'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var path = require('path');
var File = gutil.File;
var output = {};

module.exports = function () {

  function bufferFiles(file, enc, cb) {
    output[path.basename(file.path, '.mustache')]
        = file.contents.toString();
		cb(null, null);
	}

  function finish(cb) {
    //FIXME: try not to write to the file system
    this.push(new File({
      contents: new Buffer(JSON.stringify(output))
    }));

    this.emit('end');

    return 'WHASS';
  };

  return through.obj(bufferFiles, finish);
};
