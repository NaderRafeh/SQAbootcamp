describe('angularjs homepage todo list', function() {
    it('should add a todo', function() {
      browser.get('http://juliemr.github.io/protractor-demo/');
      element(by.model("first")).sendKeys(7);
      
      element(by.model("second")).sendKeys(3);

     element(by.model('operator')).element(by.css("option:nth-child(4)")).click();
      element(by.id('gobutton')).click();
     
      browser.sleep(10000);
    });
  });