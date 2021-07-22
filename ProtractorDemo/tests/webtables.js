describe('my Demo WebTables', function() {
    it('validate url', function() {
      browser.waitForAngularEnabled(false);
 
      browser.get('https://www.timeanddate.com/worldclock/');
      expect(browser.getCurrentUrl()).toBe('https://www.timeanddate.com/worldclock/');  
      browser.manage().window().maximize();  
      browser.sleep(3000);

      var tables = element.all(by.tagName('table'));
      tables.count().then(function(eleSize){
      console.log('tables count: '+eleSize);
      });
      var rows = element.all(by.tagName('tr'));
      rows.count().then(function(eleSize){
      console.log('rows count :' + eleSize);    
      });
      var columns = element.all(by.tagName('td'));
      columns.count().then(function(eleSize){
      console.log('columns count :' + eleSize);  
      });
      var table = element(by.xpath("/html/body/div[6]/section[1]/div/section/div[1]/div/table/tbody/tr[2]/td[7]/a"));
      table.getText().then(function(eleSize){
      console.log('element size: '+eleSize);
      });
      var cultable = element(by.xpath("/html/body/div[6]/section[1]/div/section/div[1]/div/table/tbody/tr[2]/td[6]"));
      cultable.getText().then(function(eleSize){
      console.log('cultable size: '+eleSize);
      });
      var part1 = "/html/body/div[6]/section[1]/div/section/div[1]/div/table/tbody/tr[";
      var part2 = "]/td[1]";
      for (var i = 1; i<=36; i++) {
      var text =element(by.xpath(part1+i+part2));
      text.getText().then(function(eleName){
      console.log('element Name: '+eleName);
      });
    }
    });
});