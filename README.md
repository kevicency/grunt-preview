# grunt-preview

> Open files for preview


## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-preview --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-preview');
```

*This plugin was designed to work with Grunt 0.4.x. If you're still using grunt v0.3.x it's strongly recommended that [you upgrade](http://gruntjs.com/upgrading-from-0.3-to-0.4), but in case you can't please use [v0.3.2](https://github.com/gruntjs/grunt-contrib-clean/tree/grunt-0.3-stable).*


## Preview task
_Run this task with the `grunt preview` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Usage Examples

There are three formats you can use to run this task.

#### Simple

```js
preview: ["path/to/file/one.html"]
```

This opens the HTML file with the default app for HTML files.

#### Complex (with custom destination)

Assume we have this file structure for `.tmp/`

```
.tmp/
|
|- foo.html
|
+- bar/
    |
    +- baz.html
```

and configure the `preview` task like:

```js
preview: {
  html: {
    cwd: '.tmp'
    dest: 'http://localhost:9000'
    src: ["{,*/}*.html"]
  }
}
```

This will open the following urls:

  * `http://localhost:9000/foo.html`
  * `http://localhost:9000/bar/baz.html`
