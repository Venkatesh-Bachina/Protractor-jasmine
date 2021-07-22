describe('My Demo Framework', function(){
    it ('Launch URL', function(){
        browser.waitForAngularEnabled(false);
        browser.get('http://demo.automationtesting.in/Frames.html');
        expect(browser.getCurrentUrl()).toBe('http://demo.automationtesting.in/Frames.html');  
        browser.manage().window().maximize();  
        browser.sleep(2000);
        browser.switchTo().frame(0);
        element(by.xpath("/html/body/section/div/div/div/input")).sendKeys("ARIQT");
        browser.sleep(2000);
        
    });
});