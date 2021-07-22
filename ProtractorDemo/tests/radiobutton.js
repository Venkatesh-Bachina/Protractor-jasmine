describe('My Demo Radiobutton', function(){
    it ('Launch URL', function(){
        browser.waitForAngularEnabled(false);
        browser.get('https://materializecss.com/radio-buttons.html');
        expect(browser.getCurrentUrl()).toBe('https://materializecss.com/radio-buttons.html');  
        browser.manage().window().maximize();  
        browser.sleep(1000);
        var radiobutton = element(by.xpath("//span[contains(text(),'Red')]")).click();
        expect(radiobutton.isEnabled()).toBe(true);
        browser.sleep(2000);
       var radiobutton = element(by.xpath("//span[contains(text(),'Yellow')]")).click();
        expect(radiobutton.isEnabled()).toBe(true);
        browser.sleep(2000);
        var radiobutton = element(by.xpath("//span[contains(text(),'Green')]")).click();
        expect(radiobutton.isEnabled()).toBe(true);
        browser.sleep(2000);
        var radiobutton = element.all(by.name("group1"));
      //  expect(radiobutton.count()).toEqual(4);
        radiobutton.count().then(function(eleSize){
         console.log('radiobutton count:'+eleSize);
     });
    });
});  


    


        
    


      


