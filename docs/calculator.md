---
example1:
  id: addition-calc
  title: Addition
example2:
  id: subtraction-calc
  title: Subtraction
---
<script type="text/javascript" src="require.js" data-main="calculatorDoc.js"></script>

#Calculator

The calculator is our contrived sample component. It carries out simple arithmetic on two inputted values. It is configurable by passing context into it.

##Example 1
Adding two numbers
{{#example1}}
  {{> calculator}}
{{/example1}}

##Example 2
Subtracting two numbers
{{#preview:html}}
  {{#example2}}
    {{> calculator}}
  {{/example2}}
{{/preview:html}}
