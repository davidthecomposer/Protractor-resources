
describe('Protractor Synchronization steps', () => {
    it('should Open NonAngular JS website Sync', () => {
          browser.waitForAngularEnabled(false);
          browser.get('http:\\www.itgeared.com/demo/1506-ajax-loading.html');

          element(by.css('a[href="javascript: void(0);loadAjax();"]')).click();
          let ec = protractor.ExpectedConditions;

          browser.wait(ec.invisibilityOf(element(by.id("loader"))),8000);
          element(by.id("results")).getText().then((text) => {
            console.log(text);
          });
    });
});
