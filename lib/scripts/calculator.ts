//sourceMappingUrl=calculator.js.map
'use strict';
/* This is just a contrived sample component, for use as a starting point
 * From this we should be able to determine a common style & structure
 * At the moment this is framework agnostic but we may decide to bring things in
 */

class Calculator {

  private modifier: string;
  private el: HTMLElement;
  private add1: HTMLInputElement;
  private add2: HTMLInputElement;
  private result: HTMLElement;

  static SELECTORS = {
    ADDEND1: '.js-addend-1',
    ADDEND2: '.js-addend-2',
    RESULT: '.js-result'
  }

  constructor(el: any, opts: any) {
    this.el = el;
    this.modifier = opts.modifier;
    this.add1 = <HTMLInputElement>this.el.querySelector(Calculator.SELECTORS.ADDEND1);
    this.add2 = <HTMLInputElement>this.el.querySelector(Calculator.SELECTORS.ADDEND2);
    this.result = <HTMLElement>this.el.querySelector(Calculator.SELECTORS.RESULT);
    var modifier: HTMLElement = <HTMLElement>this.el.querySelector('.js-modifier');
    modifier.innerHTML = this.modifier;

    //Listeners
    this.add1.addEventListener('change', this.calculate.bind(this), false);
    this.add2.addEventListener('change', this.calculate.bind(this), false);
  }

  calculate(): void {
    var sum;
    var val1: number = parseInt(this.add1.value, 10);
    var val2: number = parseInt(this.add2.value, 10);

    switch (this.modifier) {
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

export = Calculator;
