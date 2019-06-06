describe('handle an alert', function() {
    browser.waitForAngularEnabled(false);
    it('should type in a name, and handle closing the alert', function() {
        browser.get('http://www.qaclickacademy.com/practice.php');
        element(by.id('name')).sendKeys('David Hal Campbell');
        element(by.id('confirmbtn')).click();

        browser.switchTo().alert().accept();
        //could also use .dismiss() instead for "cancel" button or similar.
    });
});
