describe('acces an iframe', function() {

  it('should access the frame and then access elements', function() {
    browser.waitForAngularEnabled(false);
    browser.driver.manage().window().maximize();
    browser.get('http://www.qaclickacademy.com/practice.php');
    browser.switchTo().frame(element(by.tagName('iframe')).getWebElement());

    element(by.css('a[href="https://www.youtube.com/channel/UCgx5SDcUQWCQ_1CNneQzCRw"]')).click();
    browser.getAllWindowHandles().then(function(handles) {
      //gets the window handles available (one new opened with the click) and THEN
      browser.switchTo().window(handles[1]);



     expect(browser.getTitle()).toEqual('QAClickAcademy - YouTube');

   });
  });

});
