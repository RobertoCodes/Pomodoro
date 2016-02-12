window.TodoEditForm = React.createClass({

  getInitialState: function () {
    debugger;
    return ({ name: this.props.todo.name, pomodoros: this.props.todo.pomodoros, revealed: true});
  },

  handleNumChange: function (e) {
    this.setState({pomodoros: e.target.value});
  },

  handleNameChange: function (e) {
    this.setState({name: e.target.value});
  },

  editTodo: function (e) {
    e.preventDefault();
    var todo = { name: this.state.name, pomodoros: this.state.pomodoros, id: this.props.todo.id};
    this.setState({ name: "", pomodoros: "", revealed: false});
    ApiUtil.editTodo(todo);
  },

  render: function () {

    if (!this.state.revealed) {
      return (
        <div></div>
      );
    } else {
      return (
        <div id="todo-form">
          <form onSubmit={this.editTodo}>
            <input id="todo-name" value={this.state.name}
              onChange={this.handleNameChange}/>
            <br/>
              <input id="pomodoro-number" type="number" min="1" max="100" onChange={this.handleNumChange} value={this.state.pomodoros}/>
            <br/>
            <button id="add-todo-button">Update Todo</button>
          </form>
        </div>
       );
      }
    }

});
