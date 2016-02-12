window.TodoEditForm = React.createClass({

  getInitialState: function () {
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
    var todo = {};
    Object.keys(this.state).forEach(function (key) {
      todo[key] = this.state[key];
    }.bind(this));
    this.setState({ name: "", pomodoros: "", revealed: false});
    todo[id] = this.props.todo.id;
    ApiUtil.editTodo(todo);
  },

  render: function () {

    if (!this.state.revealed) {
      return (
        <div id="todo-form">
          <form onSubmit={this.createTodo}>
            <input id="todo-name" value={this.state.name}
              onChange={this.handleNameChange} placeholder="What do you need to do?"/>
            <br/>
              <input id="pomodoro-number" type="number" min="1" max="100" onChange={this.handleNumChange} value={this.state.pomodoros}/>
            <br/>
            <button id="add-todo-button">Add Todo</button>
          </form>
        </div>
      );
    } else {
      return (
        <div id="todo-form">
          <form onSubmit={this.createTodo}>
            <input id="todo-name" value={this.state.name}
              onChange={this.handleNameChange} placeholder="What do you need to do?"/>
            <br/>
              <input id="pomodoro-number" type="number" min="1" max="100" onChange={this.handleNumChange} value={this.state.pomodoros}/>
            <br/>
            <button id="add-todo-button">Add Todo</button>
          </form>
        </div>
       );
      }
    }

});
