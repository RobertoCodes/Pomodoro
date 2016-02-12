window.TodoForm = React.createClass({

  getInitialState: function () {
    return ({ name: "", pomodoros: 1});
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
