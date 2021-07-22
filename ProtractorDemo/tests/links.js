describe('my Demo Links', function() {
    it('validate url', function() {
     browser.waitForAngularEnabled(false);
 
     browser.get('https://www.google.com/');
     expect(browser.getCurrentUrl()).toBe('https://www.google.com/');  
     browser.manage().window().maximize();  
     browser.sleep(3000);
      var links = element.all(by.tagName("a"));
      links.count().then(function(eleSize){
        console.log('links count: '+eleSize);
     });
     var header = element(by.xpath('/html/body/div[1]/div[1]'))
     var total = header.all(by.tagName('a'));
     total.count().then(function(eleSize){
     console.log('links count: '+eleSize);
     });
     total.getText().then(function(eleSize){
     console.log('links text: '+eleSize);
     });
     var header = element(by.xpath('/html/body/div[1]/div[1]'))
     var total = header.all(by.tagName('a'));
     //var Gmail =header.element(by.xpath('//*[@id="gb"]/div/div[1]/div/div[1]/a')).click();
     total.count().then(function(eleSize){
        console.log('links count: '+eleSize);
        
     });
     var Gmail =header.element(by.xpath('//*[@id="gb"]/div/div[1]/div/div[1]/a')).click();
     browser.sleep(2000);
     browser.navigate().back()
     total.getText().then(function(eleSize){
     console.log('links count: '+eleSize);
     });
        
     });
});
 