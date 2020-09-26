describe('test', function() {
    var jsData = require("./data.js");
    it('test2', function() {
      browser.get('http://juliemr.github.io/protractor-demo/');
      element(by.model("first")).sendKeys(jsData.data.firstInput);
      element(by.model("second")).sendKeys(jsData.data.secondInput);

      element(by.id('gobutton')).click();
      expect(element(by.css("h2[class='ng-binding']")).getText()).toBe(jsData.data.result);


  
    });
  });