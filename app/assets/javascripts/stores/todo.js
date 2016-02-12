(function () {

  var TODOS_INDEX_CHANGE_EVENT = "todoIndexChangeEvent";

  var _todos = [];

  var resetTodos = function (todos) {
    _todos = todos;
  };

  var resetTodo = function (todo) {
    var switched = false;
    _todos.forEach(function (td) {
      if (td.id === todo.id) {
        _todos[_todos.indexOf(td)] = todo;
        switched = true;
      }
    });
    if(!switched) {_todos.push(todo);}
  };

  window.TodoStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _todos.slice();
    },

    addTodosIndexChangeListener: function (callback) {
      this.on(TODOS_INDEX_CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case TodoConstants.TODOS_RECEIVED:
          resetTodos(payload.todos);
          TodoStore.emit(TODOS_INDEX_CHANGE_EVENT);
        break;
        case TodoConstants.TODO_RECEIVED:
          resetTodo(payload.todo);
          TodoStore.emit(TODOS_INDEX_CHANGE_EVENT);

    }
    })


  });

})();
