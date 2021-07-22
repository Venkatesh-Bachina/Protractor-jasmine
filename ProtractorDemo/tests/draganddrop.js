describe('My Demo Draganddrop', function(){
    it ('Launch URL', function(){
        browser.waitForAngularEnabled(false);
        browser.get('https://jqueryui.com/droppable/');
        expect(browser.getCurrentUrl()).toBe('https://jqueryui.com/droppable/');  
        browser.manage().window().maximize();  
        browser.sleep(2000);
        browser.switchTo().frame(0);
        var source = element(by.xpath('/html/body/div[1]'));
        var destination =element(by.xpath('/html/body/div[2]'));
        browser.actions().dragAndDrop(source,destination).perform();
        browser.sleep(9000);
       

    });
});