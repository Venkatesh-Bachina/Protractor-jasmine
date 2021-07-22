describe('my Demo HandlingWindows', function() {
    it('validate url', function() {
      browser.waitForAngularEnabled(false);
 
      browser.get('http://demo.automationtesting.in/Windows.html');
      expect(browser.getCurrentUrl()).toBe('http://demo.automationtesting.in/Windows.html');  
      browser.manage().window().maximize();  
      browser.sleep(3000);
      var tabbedwindow = element(by.xpath("//*[@id='Tabbed']/a/button")).click();
      browser.sleep(2000); 
      var winhandles = browser.getAllWindowHandles();
      winhandles.then(function(handles){
      var parentwindow = handles[0];
      var tabbedwindow = handles[1];
      browser.switchTo().window(tabbedwindow);
      browser.getTitle().then(title =>{
      console.log("tabbedwindow title is :" + title);
      browser.sleep(2000);  
      browser.close();  
     }); 
      browser.switchTo().window(parentwindow);
      browser.getTitle().then(title =>{
      console.log("parentwindow title is :" + title);
      browser.sleep(2000);
      browser.navigate().back()
      browser.sleep(2000);
      }) 
      });

    });
});