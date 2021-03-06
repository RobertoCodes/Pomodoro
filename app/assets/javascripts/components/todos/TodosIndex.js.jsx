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
    return (
      <div>
        <ul>
          {this.state.todos.map(function (todo) {
            return (
                <TodosIndexItem key={todo.id} todo={todo}/>
            )
          }.bind(this))}
        </ul>
        <TodoForm/>
        {this.props.children}
      </div>
    )
  }

});
