window.ApiUtil = function () {

  fetchAllTodos: function () {
    $.ajax({
      url: "/api/todos",
      success: function (todos) {
        ApiActions.receiveAllTodos(todos);
      }
    });
  }

}
