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
    ApiUtil.deleteTodo(this.props.todo);
  },

  render: function () {
    var view;

    if (!this.state.editing) {
      view = <li className="group">
        <span>{this.props.todo.name} {this.props.todo.pomodoros}</span> x <figure id="small-tomato"></figure>
        <button onClick={this.handleEdit}>Edit Todo</button>
        <button onClick={this.handleDelete}>Remove from List</button>

        <Timer todo={this.props.todo}/>
      </li>;
    } else {
      view = <li className="group">
        <span>{this.props.todo.name} {this.props.todo.pomodoros}</span> x <figure id="small-tomato"></figure>
        <TodoEditForm todo={this.props.todo}/>
        <button onClick={this.cancelEditing}>Cancel</button>
      </li>;
    }

    return (
      view
    );
  }

})
