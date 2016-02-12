window.TodosIndexItem = React.createClass({

  getInitialState: function () {
    return ({editing: false});
  },

  handleEdit: function (e) {
    e.preventDefault();
    this.setState({editing: true});
  },

  cancelEditing: function () {
    this.setState({editing: false});
  },

  handleDelete: function () {
    ApiUtil.deleteTodo(this.props.todo.id);
  },

  render: function () {
    var view;

    if (!this.state.editing) {
      view = <li className="group" id="todo-item">
        <span id="todo-name">{this.props.todo.name}</span>
          <span className="group" id="num-poms">{this.props.todo.pomodoros} x
          </span> <figure id="small-tomato"/>
        <p></p>
        <button onClick={this.handleEdit}>Edit Todo</button>
        <button onClick={this.handleDelete}>Remove from List</button>

        <Timer todo={this.props.todo}/>
      </li>;
    } else {
      view = <li className="group" id="todo-item">
        <span id="todo-name">{this.props.todo.name}</span>
          <span className="group" id="num-poms">{this.props.todo.pomodoros} x
          </span> <figure id="small-tomato"/>
        <p></p>
        <TodoEditForm todo={this.props.todo}/>
        <button onClick={this.cancelEditing}>Cancel</button>
      </li>;
    }

    return (
      view
    );
  }

})
