---
example1:
  id: addition-calc
  title: Addition
example2:
  id: subtraction-calc
  title: Subtraction
---

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
{{#preview:js}}
  TODO: This would only work with inline scripts
{{/preview:js}}

<script type="text/javascript" src="./bundle.js" charset="utf-8"></script>
