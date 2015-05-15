'use strict';
var fs = require('fs');
var Hogan = require('hogan.js');
var through = require('through2');
var gutil = require('gulp-util');
var highlight = require('highlight').Highlight;
var Entities = require('html-entities').AllHtmlEntities;

var entities = new Entities();
var partials = null;
var jsPrefix = "<div class='tab-pane preview-pane'><pre class='html'>";
var jsSuffix = "</pre></div>";
var htmlPrefix = "<div class='tab-pane preview-pane active'><pre class='javascript'>";
var htmlSuffix = "</pre></div>";

function render(file, encoding, done) {
  var str = "{{<master}}{{$main}}" + file.contents.toString() + "{{/main}}{{/master}}";
  var tmpl = Hogan.compile(str);

  //build nav
  file.data.components = [];
  for (var prop in partials) {
    if( partials.hasOwnProperty( prop ) && typeof partials[prop] === 'string') {
      file.data.components.push(prop);
    }
  }

  file.data['preview:js'] =  function() {
    return function(text, render) {
      var tmpl = Hogan.compile(text)
      var html = entities.decode(tmpl.render(file.data, partials));
      return html + jsPrefix+ highlight(html) + jsSuffix;
    }
  }

  file.data['preview:html'] =  function() {
    return function(text, render) {
      var tmpl = Hogan.compile(text)
      var html = tmpl.render(file.data, partials);
      return html + htmlPrefix + highlight(html) + htmlSuffix;
    }
  }

  var html = tmpl.render(file.data, partials);

  file.contents = new Buffer(html);
  file.path = gutil.replaceExtension(file.path, '.html');

  done(null, file);
};

function gulpTask(opts) {
  partials = opts.partials;
  return through.obj(render);
};

module.exports = gulpTask;
