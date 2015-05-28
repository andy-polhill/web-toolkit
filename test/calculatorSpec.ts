//sourceMappingUrl=calculatorSpec.js.map
///<reference path="../typings/tsd.d.ts"/>
'use strict';

import Calculator = require('lib/scripts/calculator');

/* global Calculator */
/* global Hogan */

describe('Calculator', function() {

  var tmpl: any;
  var add1: Element;
  var add2: Element;
  var result: Element;

  beforeEach(function() {
    tmpl = Hogan.compile(window.__html__['lib/templates/calculator.mustache']);
    document.body.innerHTML = tmpl.render({
      title: 'Addition'
    });
    add1 = document.body.querySelector(Calculator.SELECTORS.ADDEND1);
    add2 = document.body.querySelector(Calculator.SELECTORS.ADDEND2);
    result = document.body.querySelector(Calculator.SELECTORS.RESULT);
  });

  afterEach(function() {
    var body: HTMLElement = document.body;
    body.innerHTML = '';
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
      changeInput(add1, 1);
      changeInput(add2, 1);
      expect(result.textContent).toBe('2');
    });

    it('should subtract two numbers', function() {
      var calc = new Calculator(document.querySelector('.js-calculator'), {
        modifier: '-'
      });
      changeInput(add1, 1);
      changeInput(add2, 1);
      expect(result.textContent).toBe('0');
    });
  });
});
