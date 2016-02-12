window.TodosIndexItem = React.createClass({

  getInitialState: function () {
    return ({editing: false});
  },

  handleEdit: function () {
    this.setState({editing: true});
  },

  render: function () {
    var view;

    if (!this.state.editing) {
      view = <li className="group" onClick={this.handleEdit}>
        <span>{this.props.todo.name} {this.props.todo.pomodoros}</span> x <figure id="small-tomato"></figure>
      </li>;
    } else {
      view = <li className="group" onClick={this.handleEdit}>
        <span>{this.props.todo.name} {this.props.todo.pomodoros}</span> x <figure id="small-tomato"></figure>
        <TodoEditForm todo={this.props.todo}/>
      </li>;
    }

    return (
      view
    );
  }

})
