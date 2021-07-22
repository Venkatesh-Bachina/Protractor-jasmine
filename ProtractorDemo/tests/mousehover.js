describe('my Demo Mousehover', function() {
    it('validate url', function() {
      browser.waitForAngularEnabled(false);
 
      browser.get('https://www.google.com/');
      expect(browser.getCurrentUrl()).toBe('https://www.google.com/');  
      browser.manage().window().maximize();  
      browser.sleep(3000);
      var button = element(by.xpath('//*[@id="gb"]/div/div[1]/div/div[2]/a'));
      browser.actions().mouseMove(button).perform();
     browser.sleep(5000);

    });
});