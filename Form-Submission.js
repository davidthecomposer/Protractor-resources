describe('Angular submission form suite', () => {
  it('should access elements from the form', () => {
    browser.get('http://qaclickacademy.github.io/protocommerce/');

    element(by.name('name')).sendKeys('David Campbell');
    element(by.css('input[name = "email"]')).sendKeys('davidhcampbell@yahoo.com');
    element(by.id("exampleInputPassword1")).sendKeys('HYM!$+3r');
    element(by.css('input[type = "checkbox"]')).click();
    // element(by.css('[id = "exampleFormControlSelect1"] option', 'Female'));
    element(by.cssContainingText('[id = "exampleFormControlSelect1"] option', 'Female')).click();
    element.all(by.name('inlineRadioOptions')).first().click();
    element(by.name('bday')).sendKeys('08311982');
    element(by.buttonText('Submit')).click();
    expect(element(by.css('div[class*= "success"]')).getText()).toContain('Success! The Form has been submitted successfully!.');
    //failed test becasue it was grabbing the link text of "x" and not just the actual text part added in the x and it passed.
    // .then(() =w> {
    //     element(by.css('div[class*= "success"]')).getText().then( (text) => {
    //       console.log(text);
    //     });
    // });
    //the above is another way to just print the text to console using .then functionality.
  });
  it('should confirm error message for less than 2 characters', () => {
    element(by.name('name')).clear();
    element(by.name('name')).sendKeys(" M ");
    element(by.css('div[class="alert alert-danger"]')).getText().then((text) => {
      console.log(text);
    });
  });
});
