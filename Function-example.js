describe('Divide some numbers', () => {

//before each will allow the page to be reloaded before submitting a new input.

  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  //variables to simplify the main calculator function. could be exported with function.


  const divide = 'DIVISION';
  const add = 'ADDITION';
  const multiply = 'MULTIPLICATION';
  const subtract = 'SUBTRACTION';
  const modulo = 'MODULO';
  let result = element(by.repeater('result in memory')).element(by.css('td:nth-child(3)')).getText();
  let calc = 0;

  //The main calculator function. Could be exported to another file within framework.
  const inputKeys = (a, b, opVal) => {
    if (opVal === add) {
      calc = (a + b).toString();
    } else if (opVal === multiply) {
      calc = (a * b).toString();
    } else if (opVal === subtract) {
      calc = (a - b).toString();
    } else if (opVal === divide) {
      calc = (a / b).toString();
    } else {
      calc = (a % b).toString();
    }
    element(by.model('first')).sendKeys(a);
    element(by.model('second')).sendKeys(b);
    element(by.model('operator')).click();
    element(by.css(`option[value = ${opVal}]`)).click();
    element(by.id('gobutton')).click();

    expect(result).toBe(calc);
  };
// using the calculator function to simplify the actual test language
  it('should select operator and read correct result', () => {

    inputKeys(9, 3, divide);
    //now each function call will run a test with an expectation.
    inputKeys(9, 3, add);
    inputKeys(9, 3, multiply);
    inputKeys(9, 3, modulo);
  });
});
