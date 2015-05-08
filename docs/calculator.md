---
example1:
  title: Adding
  modifier: +
example2:
  title: Subtracting
  modifier: -
---

#Calculator

The calculator is our contrived sample component. It carries out simple arithmetic
on two inputted values. It is configurable by passing context into it.

##Example 1
Adding two numbers
{{#example1}}
  {{> lib/templates/calculator.mustache}}
{{/example1}}

##Example 2
Subtracting two numbers
{{#example1}}
  {{> lib/templates/calculator.mustache}}
{{/example1}}
