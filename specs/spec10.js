
describe('Users Management', function() {

    var obj = require("./object.js");
    
    it('Open Angularjs WEbsite', function() {

        function add(a,b){

            
        obj.input1.sendKeys(a);
        obj.input2.sendKeys(b);
        obj.goButton.click();

        };                                
        
        browser.get('https://juliemr.github.io/protractor-demo/');

        

        add(3,7);
        add(3,9);
        add(9,6);

        obj.countRows();

        obj.loopAndAssert();








      

      
    });
});