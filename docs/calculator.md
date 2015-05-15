---
example1:
  id: addition-calc
  title: Addition
example2:
  id: subtraction-calc
  title: Subtraction
---
<script src="scripts/calculator.js"></script>

#Calculator

The calculator is our contrived sample component. It carries out simple arithmetic on two inputted values. It is configurable by passing context into it.

##Example 1
Adding two numbers
{{#example1}}
  {{> calculator}}
{{/example1}}

<script>
  new Calculator(document.getElementById('{{example1.id}}'), {
    modifier: '+'
  });
</script>

##Example 2
Subtracting two numbers
{{#preview:html}}
  {{#example2}}
    {{> calculator}}
  {{/example2}}
{{/preview:html}}
{{#preview:js}}
  <script>
    new Calculator(document.getElementById('{{example2.id}}'), {
      modifier: '-'
    });
  </script>
{{/preview:js}}
