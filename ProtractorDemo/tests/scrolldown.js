describe('my Demo Scrolldown', function() {
    it('validate url', function() {
      browser.waitForAngularEnabled(false);
 
      browser.get('https://www.google.com/');
      expect(browser.getCurrentUrl()).toBe('https://www.google.com/');  
      browser.manage().window().maximize();  
      browser.sleep(3000);
      element(by.xpath("/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input")).sendKeys('Udemy');
      browser.sleep(3000);
      element(by.name('btnK')).click();
      browser.sleep(2000);
      browser.executeScript('window.scrollTo(0,2000);')//.then(function(){
      browser.sleep(2000); 
      //})
      browser.executeScript('window.scrollTo(0,document.body.scrollHeight)');
      browser.sleep(2000);

       


       

    });
});