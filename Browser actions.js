describe('Actions demo', () => {
  it('opens posse website and navigates', () => {
    // could make a variable called mouse1 that = element(by.model('locationQuery')).sendKeys('London')

    browser.get('http://posse.com');
    element(by.model('userInputQuery')).sendKeys('river');
    browser.actions().mouseMove(element(by.model('locationQuery')).sendKeys('London')).perform();
    //
    browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
    browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function() {
      browser.sleep(5000); // .then is becasue of browser.sleep function. Not neccesary.
      // making the element call and then putting it within the framework of expect (element call).toBe();
      expect(element.all(by.css('div[ng-mousover*="onSearchResultOver"]')).count()).toEqual(7);
      //below gets the first of the 7 elements
      element.all(by.css('div[ng-mousover*="onSearchResultOver"]')).get(0).click();
      element(by.css("a[ng-href*='London/River Island']")).click().then(function() {
        // Clicks on londonRiver link   and THEN
        browser.getAllwindowHandles().then(function(handles) {
          //gets the window handles available (one new opened with the click) and THEN
          browser.switchTo().window(handles[1]);
          //finds the second handle which is index 1 (starts from 0) and switchesto that.

          browser.getTitle().then(function(title) {
            console.log(title);
            //prints title from new page
          });
          //below will switch to the parent window
          browser.switchTo().window(handles[0]);
        });
      });
    }); // the * makes it so you don't have to add the (search result) part of the css.
  });
});
