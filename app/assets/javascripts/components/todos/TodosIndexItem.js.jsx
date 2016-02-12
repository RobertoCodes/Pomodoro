window.TodosIndexItem = React.createClass({

  getInitialState: function () {
    return ({editing: false});
  },

  handleEdit: function (e) {
    e.preventDefault();
    this.setState({editing: true});
  },

  render: function () {
    var view;

    if (!this.state.editing) {
      view = <li className="group">
        <span>{this.props.todo.name} {this.props.todo.pomodoros}</span> x <figure id="small-tomato"></figure>
        <button onClick={this.handleEdit}>Edit Todo</button>
        <Timer/>
      </li>;
    } else {
      view = <li className="group">
        <span>{this.props.todo.name} {this.props.todo.pomodoros}</span> x <figure id="small-tomato"></figure>
        <TodoEditForm todo={this.props.todo}/>
      </li>;
    }

    return (
      view
    );
  }

})
