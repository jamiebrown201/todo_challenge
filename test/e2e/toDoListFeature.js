// var mock = require('protractor-http-mock');

describe('To do list feature', function() {
  var addToDo = element(by.model('main.formData.text'));
  var button = element(by.className('btn'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To Do List app');
  });


  it('adds an item', function(){
    addToDo.sendKeys('this is a test')
    button.click();
    var todos = element.all(by.repeater("todo in main.todos"));
    expect(todos.getText()).toContain('this is a test');
  });

});
