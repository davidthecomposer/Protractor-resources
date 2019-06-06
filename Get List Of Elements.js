describe('get list of elements', function() {
  //Global Variables
  let firstNum = element(by.model('first'));
  let secondNum = element(by.model('second'));
  let goButton = element(by.id('gobutton'));
  let result = element(by.className('ng-binding'));
  let history = element.all(by.repeater('result in memory'));

  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  function add(a, b) {
    firstNum.sendKeys(a);
    secondNum.sendKeys(b);
    goButton.click();
  }

  it('checks the history', function() {
    add(1, 2);
    add(2, 3);
    add(3, 4);

    expect(history.count()).toEqual(3);

    add(5, 6);
    add(7, 8);

    expect(history.count()).toEqual(5);
  });
});
