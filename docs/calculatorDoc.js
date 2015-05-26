'use strict';
var Calculator = require('../lib/scripts/calculator');

new Calculator(document.getElementById('addition-calc'), {
  modifier: '+'
});

new Calculator(document.getElementById('subtraction-calc'), {
  modifier: '-'
});
