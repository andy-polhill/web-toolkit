'use strict';
var Calculator = require('../lib/scripts/calculator');

/* global Calculator */
/* global Hogan */
describe('Calculator', function() {

  var tmpl;

  beforeEach(function() {
    tmpl = Hogan.compile(window.__html__['lib/templates/calculator.mustache']);
    document.body.innerHTML = tmpl.render({
      title: 'Addition'
    });
  });

  afterEach(function() {
    document.body.innerHtml = '';
  });

  var changeInput = function(el, val) {
    el.value = val;
    var event = document.createEvent('Event');
    event.initEvent('change', true, true);
    el.dispatchEvent(event);
  };

  describe('basic maths', function() {
    it('should add two numbers', function() {
      var calc = new Calculator(document.querySelector('.js-calculator'), {
        modifier: '+'
      });
      changeInput(calc.add1, 1);
      changeInput(calc.add2, 1);
      expect(calc.result.textContent).toBe('2');
    });

    it('should subtract two numbers', function() {
      var calc = new Calculator(document.querySelector('.js-calculator'), {
        modifier: '-'
      });
      changeInput(calc.add1, 1);
      changeInput(calc.add2, 1);
      expect(calc.result.textContent).toBe('0');
    });
  });
});
