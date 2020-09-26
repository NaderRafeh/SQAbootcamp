describe('angularjs homepage todo list', function() {
    it('should add a todo', function() {
      browser.get('http://juliemr.github.io/protractor-demo/');
      element(by.model("first")).sendKeys(7);
      element(by.model("second")).sendKeys(3);
      element(by.id('gobutton')).click();
      element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(result)
      {
          console.log(result);
      });
      browser.sleep(10000);
    });
  });