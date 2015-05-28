//sourceMappingUrl=calculatorDoc.js.map
///<reference path="../typings/tsd.d.ts"/>
'use strict';

import Calculator = require('lib/scripts/calculator');

new Calculator(document.getElementById('addition-calc'), {
  modifier: '+'
});

new Calculator(document.getElementById('subtraction-calc'), {
  modifier: '-'
});
