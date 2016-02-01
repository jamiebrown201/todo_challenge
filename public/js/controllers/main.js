angular.module('todoController', [])

	.controller('todoController', ['$http','Todos', function( $http, Todos) {

		var self = this;

		self.formData = {};

		Todos.get()
			.success(function(data) {
				self.todos = data;
			});

		self.createTodo = function() {
			if (self.formData.text !== undefined) {
				Todos.create(self.formData)
					.success(function(data) {
						self.formData = {};
						self.todos = data;
					});
			}
		};

		self.deleteTodo = function(id) {
			Todos.delete(id)
			.success(function(data) {
				self.todos = data;
			});
	  };

}]);
