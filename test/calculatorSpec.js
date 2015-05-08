'use strict';
<<<<<<< HEAD
/* global Calculator */
/* global Hogan */
=======
>>>>>>> 15b6486bd0ec90193ba03264cccaf54341371519
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
<<<<<<< HEAD
  };
=======
  }
>>>>>>> 15b6486bd0ec90193ba03264cccaf54341371519

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
<<<<<<< HEAD
});
=======
})
>>>>>>> 15b6486bd0ec90193ba03264cccaf54341371519
