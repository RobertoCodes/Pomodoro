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

  componentWillUpdate: function () {
    if (this.state.editing) {
      this.cancelEditing();
    }
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
        <button onClick={this.handleDelete}>Remove</button>
        <button onClick={this.handleEdit}>Edit</button>

        <Timer todo={this.props.todo}/>
      </li>;
    } else {
      view = <li className="group" id="todo-item">
        <TodoEditForm todo={this.props.todo}/>
      </li>;
    }

    return (
      view
    );
  }

})
