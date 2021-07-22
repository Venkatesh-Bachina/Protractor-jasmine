describe('my Demo Doubleclick', function() {
    it('validate url', function() {
      browser.waitForAngularEnabled(false);
 
      browser.get('https://www.google.com/');
      expect(browser.getCurrentUrl()).toBe('https://www.google.com/');  
      browser.manage().window().maximize();  
      browser.sleep(3000);
      var doubleclick = element(by.xpath('//*[@id="gb"]/div/div[1]/div/div[2]/a'));
      //way1
      browser.actions().mouseMove(doubleclick).doubleClick().perform();
      browser.sleep(5000);
      //way2
      //browser.actions().doubleClick(doubleclick).perform();
     // browser.sleep(5000);
    });
});