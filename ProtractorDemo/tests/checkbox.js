describe('My Demo Checkbox', function(){
    it ('Launch URL', function(){
        browser.waitForAngularEnabled(false);
        browser.get('https://materializecss.com/checkboxes.html');
        expect(browser.getCurrentUrl()).toBe('https://materializecss.com/checkboxes.html');  
        browser.manage().window().maximize();  
        browser.sleep(1000);
        var checkbox = element(by.xpath("//input[@type='checkbox']//following-sibling::span"));
        checkbox.click();
        expect(checkbox.isEnabled()).toBe(true);
        console.log("Checked the box");
        browser.sleep(2000);
       var checkbox = element(by.xpath("//input[@type='checkbox']//following-sibling::span"));
       checkbox.click();
       console.log("Unchecked the box");
       browser.sleep(2000);
       var checkbox = element.all(by.tagName("input"));
       checkbox.count().then(function(eleSize){
       console.log('checkbox count:'+eleSize);
        });
    });
});

