window.ApiUtil = {

  fetchAllTodos: function () {
    $.ajax({
      url: "/api/todos",
      success: function (todos) {
        ApiActions.receiveAllTodos(todos);
      }
    });
  }

};
