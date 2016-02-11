window.TodosIndex = React.createClass({

  getInitialState: function () {
    return { todos: TodoStore.all()};
  },

  _onChange: function () {
    this.setState({ todos: TodoStore.all()});
  },

  componentDidMount: function () {
    TodoStore.addTodosIndexChangeListener(this._onChange);
    ApiUtil.fetchAllTodos();
  },

  render: function () {
    debugger;
    return (
      <div>
        <ul>
          {this.state.todos.map(function (todo) {
            return (
              <div>
                <TodosIndexItem key={todo.id} todo={todo}/>
              </div>
            )
          }.bind(this))}
        </ul>
        <Timer/>
        {this.props.children}
      </div>
    )
  }

});
