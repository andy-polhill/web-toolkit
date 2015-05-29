'use strict';
/*var Calculator = require('../lib/scripts/calculator');

new Calculator(document.getElementById('addition-calc'), {
  modifier: '+'
});

new Calculator(document.getElementById('subtraction-calc'), {
  modifier: '-'
});*/

var React = require('react');
var Calculator = require('../lib/scripts/calculator');
React.render(<Calculator modifier="+" title="Addition"/>, document.getElementById('addition-calc'));
React.render(<Calculator modifier="-" title="Subtraction"/>, document.getElementById('subtraction-calc'));
