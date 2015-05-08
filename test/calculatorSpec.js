'use strict';
/* global Calculator */
/* global Hogan */
describe('Calculator', function() {

  var tmpl;

  beforeEach(function() {
    tmpl = Hogan.compile(window.__html__['lib/templates/calculator.mustache']);
  });

  afterEach(function() {
    document.body.innerHtml = '';
  });

  var changeInput = function(el, val) {
    el.value = val;
    el.dispatchEvent(new Event('change'));
  };

  describe('basic maths', function() {

    it('should add two numbers', function() {
      document.body.innerHTML = tmpl.render({
        title: 'Addition',
        modifier: '+'
      });
      var calc = new Calculator(document.querySelector('.js-calculator'));
      changeInput(calc.add1, 1);
      changeInput(calc.add2, 1);
      expect(calc.result.textContent).toBe('2');
    });

    it('should subtract two numbers', function() {
      document.body.innerHTML = tmpl.render({
        title: 'Addition',
        modifier: '-'
      });
      var calc = new Calculator(document.querySelector('.js-calculator'));
      changeInput(calc.add1, 1);
      changeInput(calc.add2, 1);
      expect(calc.result.textContent).toBe('0');
    });
  });
});
