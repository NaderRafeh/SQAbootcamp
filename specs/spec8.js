describe('angularjs homepage todo list', function() {
    it('should add a todo', function() {
      browser.get('http://juliemr.github.io/protractor-demo/');

     element(by.model("first")).sendKeys(7);
      element(by.model("second")).sendKeys(3);
      element(by.id('gobutton')).click();
     
      element(by.model("first")).sendKeys(8);
      element(by.model("second")).sendKeys(5);
      element(by.id('gobutton')).click();

      element(by.model("first")).sendKeys(6);
      element(by.model("second")).sendKeys(3);
      element(by.id('gobutton')).click();

      element(by.model("first")).sendKeys(3);
      element(by.model("second")).sendKeys(3);
      element(by.id('gobutton')).click();

      element.all(by.repeater('result in memory')).count().then(function(result){
          console.log(result);
      });

      /*element.all(by.repeater("result in memory")).each(function(answer){
        answer.element(by.css("td:nth-child(3)")).getText().then(function(result)
        {
            console.log(result);
            expect(answer.element(by.css("td:nth-child(3)")).getText()).toBe("10 , 13, 9, 6,");

        });
    });*/
    
        /* function add(a,b){
    
                
            element(by.model("first")).sendKeys(a);
            element(by.model("second")).sendKeys(b);
            element(by.id('gobutton')).click();
         };
    
            var c= ["15","12","10"];
    
            add(3,7);
            add(3,9);
            add(9,6);
        
    
            element.all(by.repeater('result in memory')).count().then(function(result){
                console.log(result);
            });
    
            element.all(by.repeater('result in memory')).each(function(answer){
    
                for (var i=0; i<c.length; i++){
    
                expect(answer.element(by.css("td:nth-child(3)")).getText()).toBe(c[i]);
        
                   };
    
    
    
            });*/
    
            element.all(by.repeater("result in memory")).get(2).element(by.css("td:nth-child(3)")).getText().then(function(result){

                console.log(result);
            });
    
      browser.sleep(10000);
    });
  });