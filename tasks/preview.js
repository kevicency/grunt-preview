/*
 * grunt-preview
 * https://github.com/kmees/grunt-preview
 *
 * Copyright (c) 2013 Kevin Mees
 * Licensed under the MIT license.
 */

'use strict';

var open = require('open');
var path = require('path');

module.exports = function(grunt) {

  grunt.registerMultiTask('preview', 'Open files for preview', function() {
    var preview = this;

    // Open specified files
    preview.files.forEach(function(fileConfig) {
      fileConfig.src.forEach(function(file){
        if (fileConfig.dest !== preview.target){
          file = path.join(fileConfig.dest, file);
        }
        grunt.log.write('Opening file "' + file + '" for preview...');

        try {
          open(file);
          grunt.log.ok();
        } catch (e) {
          grunt.log.error();
          grunt.verbose.error(e);
          grunt.fail.warn('Preview failed.');
        }
      });
    });
  });
};
