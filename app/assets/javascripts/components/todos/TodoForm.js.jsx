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
    var todo = {};
    Object.keys(this.state).forEach(function (key) {
      todo[key] = this.state[key];
    }.bind(this));
    this.setState({ name: "", pomodoros: ""});
    debugger;
    ApiUtil.createTodo(todo);
  },

  render: function () {
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

});
