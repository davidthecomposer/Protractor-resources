exports.config = {
  framework: 'jasmine',
  //could be multiple frameworks here.
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['shop.js'],
  //could connect to any file name.js, or multiple files as a suite
  multiCapabilities: [{
    browserName: 'firefox',
  }, {
    browserName: 'chrome',
  }]

 };
