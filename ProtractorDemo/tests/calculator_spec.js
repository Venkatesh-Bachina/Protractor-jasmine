let homepage = require('../pages/homepage');


describe('My Demo Calculator', function(){
    it ('Launch URL', function(){
        //browser.get('https://juliemr.github.io/protractor-demo/');
       // expect(browser.getCurrentUrl()).toBe('https://juliemr.github.io/protractor-demo/');  
        //browser.manage().window().maximize();  
       // browser.sleep(1000);
       homepage.get('https://juliemr.github.io/protractor-demo/');

        //element(by.model('first')).sendKeys('22');
        homepage.enterFirstNumber('20');

        //element(by.model('second')).sendKeys('19');
        homepage.enterSecondNumber('2');

        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo();
      // var result= element(by.cssContainingText('.ng-binding', '41'));
      // expect(result.getText()).toBe('41');
      homepage.verifyResult('22');
        browser.sleep(7000);
       //result.getText().then(function(eleSize){
      // console.log('Result: '+eleSize);
      // });

    });
    //it ('Launch URL', function(){
    //homepage.get('https://juliemr.github.io/protractor-demo/');

    //homepage.enterFirstNumber('20');

    //homepage.enterSecondNumber('2');
    //homepage.clickGo2();
    //homepage.verifyResult('22');
    //browser.sleep(7000);
    //});


});



  




    


