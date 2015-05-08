'use strict'
/* This is just a contrived sample component, for use as a starting point
 * From this we should be able to determine a common style & structure
 * At the moment this is framework agnostic but we may decide to bring things in.
 */
var Calculator = (function() {

  function Calculator(el) {
    this.el = el;
    this.add1 = this.el.querySelector('.js-addend-1');
    this.add2 = this.el.querySelector('.js-addend-2');
    this.result = this.el.querySelector('.js-result');
    this.modifier = this.el.dataset.modifier;

    //Listeners
    this.add1.addEventListener('change', this.calculate.bind(this), false);
    this.add2.addEventListener('change', this.calculate.bind(this), false);
  }

  Calculator.prototype = {

    calculate: function() {
      var sum;
      var val1 = parseInt(this.add1.value, 10);
      var val2 = parseInt(this.add2.value, 10);

      switch(this.modifier) {
        case '+':
          sum = val1 + val2;
          break;
        case '-':
          sum = val1 - val2;
          break;
      }
      this.result.textContent = sum;
    }
  }

  return Calculator;

})();
