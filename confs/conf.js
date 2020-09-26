var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {

   
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../specs/dataDrivenJasmineSpec.js'],

    onPrepare: function() {

      browser.driver.manage().window().maximize();
  
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: '../ReportFolder/screenshots',
          takeScreenshots: true
        })
      );
  
  
   }
  }
  