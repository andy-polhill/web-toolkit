# web-toolkit
A generic toolkit for importing into web projects.

To contribute to this toolkit, first clone the repo and then.

`npm install`

## Gulp commands

###html
Converts the Markdown documentation into html and puts it in a tmp directory

###connect
Serves the compiled documentation using connect.

###jasmine
Runs all of the Jasmine specs via karma

###watch
Looks for changes to markdown files and recompiles them

###jshint
Checks JavaScript files for issues of code correctness

###jscs
Checks JavaScript files for a uniform code style

##test
Runs all test and code quality related tasks
`jscs jshint jasmine`

##serve
Compiles and serves the documentation
`html connect watch`
