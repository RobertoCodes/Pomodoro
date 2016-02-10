window.TodosIndex = React.createClass({

  getInitialState: function () {
    return { todos: TodoStore.all()};
    debugger;
  },

  _onChange: function () {
    this.setState({ todos: TodoStore.all()});
  },

  componentDidMount: function () {
    debugger;
    TodoStore.addTodosIndexChangeListener(this._onChange);
    ApiUtil.fetchAllTodos();
  },

  render: function () {
    return (
      <div>
        <ul>
          {this.state.todos.map(function (todo) {
            return
              <div>
                <TodosIndexItem key={todo.id} todo={todo}/>
              </div>;
          }.bind(this))}
        </ul>
        {this.props.children}
      </div>
    )
  }

});
