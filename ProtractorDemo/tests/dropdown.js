describe('My Demo Dropdown', function(){
    it ('Launch URL', function(){
        browser.waitForAngularEnabled(false);
        browser.get('https://www.mercurytravels.co.in/');
        expect(browser.getCurrentUrl()).toBe('https://www.mercurytravels.co.in/');  
        browser.manage().window().maximize();  
        browser.sleep(2000);
        var dropdowns = element.all(by.tagName("select"));
        dropdowns.count().then(function(eleSize){
        console.log('dropdowns count: '+eleSize);
        });
        var Type = element(by.id('themes'));
        var Options = Type.all(by.tagName('option'));
        Options.getText().then(function(eleSize){
        console.log('dropdown text: '+eleSize);
        }); 
        Type.click();
        browser.sleep(2000);
        element(by.id('themes')).element(by.css("option[value='15']")).click();
        browser.sleep(7000)
    });
});