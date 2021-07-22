let homepage = function(){


    let firstnumber_input =  element(by.model('first'));
    let secondnumber_input = element(by.model('second'));
    let gobutton_click =  element(by.css('[ng-click="doAddition()"]'));

    this.get = function(url){
    browser.get(url);    
    }
    
    this.enterFirstNumber = function(firstNo){
    firstnumber_input.sendKeys(firstNo);
    };
    this.enterSecondNumber = function(secondNo){
    secondnumber_input.sendKeys(secondNo);    
    };
    this.clickGo = function(){
    gobutton_click.click();   
    };
    
    this.verifyResult = function(result){
    let output = element(by.cssContainingText('.ng-binding', result));    
    expect(output.getText()).toEqual(result);
    };
};

module.exports = new homepage();