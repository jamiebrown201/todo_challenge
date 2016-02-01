describe('todoController', function() {
  var ctrl, todosFactoryMock;

  beforeEach(function() {
    todosFactoryMock = jasmine.createSpyObj('Todos', ['create']);
    module('toDoList', {
      todos: todosFactoryMock
    });
  });

  beforeEach(inject(function($controller) {
    ctrl = $controller('todoController');
  }));


  //   // As a forgetful person
  //   // I want to store my tasks
  //   // So that I don't forget them
  it('initialises with no input in the task box', function() {
    expect(ctrl.formData.text).toBeUndefined();
  });


});
