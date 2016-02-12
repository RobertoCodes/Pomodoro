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
      }
    });
  },

  editTodo: function (todo) {
    $.ajax({
      url: "/api/todos/" + todo.id,
      method: "PATCH",
      data: {todo: todo},
      success: function (todo) {
        ApiActions.receiveOneTodo(todo);
      }
    });
  },

  deleteTodo: function (id) {
    $.ajax({
      url: "/api/todos/" + id,
      method: "DELETE",
      success: function (todo) {
        ApiActions.removeOneTodo(todo);
      }
    });
  }

};
