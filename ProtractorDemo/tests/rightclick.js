describe('my Demo Rightclick', function() {
    it('validate url', function() {
      browser.waitForAngularEnabled(false);
 
      browser.get('https://swisnl.github.io/jQuery-contextMenu/demo.html');
      expect(browser.getCurrentUrl()).toBe('https://swisnl.github.io/jQuery-contextMenu/demo.html');  
      browser.manage().window().maximize();  
      browser.sleep(3000);
      var rightclick = element(by.className('context-menu-one btn btn-neutral'));
      browser.actions().click(rightclick,protractor.Button.RIGHT).perform();
      browser.sleep(5000);

    });
});