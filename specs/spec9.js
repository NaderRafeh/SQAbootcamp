describe('testing', function() {

    var obj = require ("./object.js");

    console.log(obj.colour);
    obj.getModel();

    it('whatever', function() {

        browser.get('http://juliemr.github.io/protractor-demo/');

        obj.input1.sendKeys(7);

        // element(by.css("h2[class='ng-binding']")).getText().then(function(result){

        //     console.log(result);

        // });

        browser.sleep(10000);


        //console.log(element(by.id()));
  
    });
  });
  
  
