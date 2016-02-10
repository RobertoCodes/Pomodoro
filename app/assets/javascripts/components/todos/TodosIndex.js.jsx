window.TodosIndex = React.createClass({

  getInitialState: function () {
    return { todos: TodoStore.all()};
  },

  _onChange: function () {
    this.setState({ todos: TodoStore.all()});
  },

});
