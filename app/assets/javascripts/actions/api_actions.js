window.ApiActions = {

  receiveAllTodos: function (todos) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODOS_RECEIVED,
      todos: todos
    });
  },

  receiveOneTodo: function (todo) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_RECEIVED,
      todo: todo
    });
  }

};
