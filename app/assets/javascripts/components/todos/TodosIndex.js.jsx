window.TodosIndex = React.createClass({
  getInitialState: function () {
    return { todos: TodoStore.all()};
  }

});
