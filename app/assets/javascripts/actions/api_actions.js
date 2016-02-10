window.ApiActions = {

  receiveAllTodos: function (todos) {
    AppDispatcher.dispatch({
    actionType: TodoConstants.TODOS_RECEIVED,
    todos: todos
    });
  }
  
};
