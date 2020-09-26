describe('test', function() {
    it('test2', function() {


      browser.waitForAngularEnabled(false);

      browser.get('https://www.google.com/');
      element(by.css("input[class='gLFyf gsfi']")).sendKeys("Angular websites");
      browser.sleep(10000);
      element(by.css("input[class='gNO89b']")).click();
      browser.sleep(10000);

      //browser.waitForAngularEnabled(true);

     /* browser.get('http://juliemr.github.io/protractor-demo/');
      element(by.model("first")).sendKeys(7);
      element(by.model("second")).sendKeys(3);
      

      element(by.id('gobutton')).click();
      // or element(by.css("button [id='gobutton']")).click();
      // orelement(by.css("button [class ='btn']")).click();
     
      element(by.css("h2[class='ng-binding']")).getText().then(function(result)
      {
        console.log(result);

      });
      browser.sleep(10000);
      expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("10");*/


  
    });
  });