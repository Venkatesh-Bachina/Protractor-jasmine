describe('My Demo Popup ', function(){
    it ('Launch URL', function(){
        browser.waitForAngularEnabled(false);
        browser.get('https://www.tsrtconline.in/oprs-web/');
        expect(browser.getCurrentUrl()).toBe('https://www.tsrtconline.in/oprs-web/');  
        browser.manage().window().maximize();  
        browser.sleep(2000);
        element(by.id('searchBtn')).click();
        browser.sleep(2000);
        var Popup = browser.switchTo().alert();
        Popup.getText().then(function(eleSize){
        console.log('Popup text: '+eleSize);
     }); 
     //click on OK use accept()
        browser.switchTo().alert().accept();
        browser.sleep(5000);
        //to click on cancel use dismiss()
    });
});