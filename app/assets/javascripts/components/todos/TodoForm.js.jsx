window.TodoForm = React.createClass({

  getInitialState: function () {
    return ({ name: "", pomodoros: "1"});
  },

  handleNumChange: function (e) {
    this.setState({pomodoros: e.target.value});
  },

  handleNameChange: function (e) {
    this.setState({name: e.target.value});
  },

  createTodo: function (e) {
    e.preventDefault();
    var todo = { name: this.state.name, pomodoros: this.state.pomodoros};
    this.setState({ name: "", pomodoros: ""});
    debugger;
    ApiUtil.createTodo(todo);
  },

  render: function () {
    return (
      <div id="todo-form">
        <form onSubmit={this.createTodo}>
          <h3>Add a Todo</h3>
          <label>Description: </label><input id="todo-name-input" value={this.state.name}
            onChange={this.handleNameChange} placeholder="What do you need to do?"/>
          <br/>
          <label>Pomodoros: </label><input id="pomodoro-number" type="number" min="1" max="100" onChange={this.handleNumChange} value={this.state.pomodoros}/>
          <br/>
          <button id="add-todo-button">Add Todo</button>
        </form>
      </div>
    );
  }

});
