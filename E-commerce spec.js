describe('buy some products', () => {
  const addToCart = (product) => {
    element.all(by.tagName('app-card')).each((item) => {
      item.element(by.css('h4 a')).getText().then((text) => {
        if (text == product) {
          element(by.buttonText('Add')).click();
        }
      });
    });
  };
  it('should navigate to the shopping page ', () => {
    browser.get('https://qaclickacademy.github.io/protocommerce/');
    browser.driver.manage().window().maximize();

    element(by.linkText("Shop")).click();
    expect(element(by.css("h1[class = 'my-4']")).getText()).toEqual('Shop Name');
  });
  it('should add selected items to the cart', () => {
    addToCart('Samsung Note 8');
    addToCart('Nokia Edge');
    expect(element(by.partialLinkText('Checkout')).getText()).toContain(`Checkout ( 2 )`);
  });
  it('should confirm price of objects in cart', () => {
    element(by.partialLinkText('Checkout')).click();
    element.all(by.tagName('tr')).each((item) => {
      expect(item.element(by.css('td:nth-child(3)')).getText()).toContain('85000');
    });
  });
});
//originally failed due to browser not being maximized and an extra navigation button appearing.
//toContain allowed me to select what part of the Checkout text was needed to pass the test.
