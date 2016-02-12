window.ApiUtil = {

  fetchAllTodos: function () {
    $.ajax({
      url: "/api/todos",
      success: function (todos) {
        ApiActions.receiveAllTodos(todos);
      }
    });
  },

  createTodo: function (todo) {
    $.ajax({
      url: "/api/todos",
      method: "POST",
      data: {todo: todo},
      success: function (todo) {
        ApiActions.receiveOneTodo(todo);
        callback && callback();
      }
    });
  }

};
