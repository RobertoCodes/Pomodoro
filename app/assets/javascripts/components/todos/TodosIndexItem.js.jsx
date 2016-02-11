window.TodosIndexItem = React.createClass({

  getInitialState: function () {
    this.setState({expanded: false});
  },

  handleClick: function () {
    expanded = this.state.expanded;
    this.setState({expanded: !expanded});
  },

  render: function () {
    var view;
    if (!this.state.expanded) {
      view = <li onClick={this.handleClick}>
              {this.props.todo.name}
             </li>;
    } else {
      view = <li onClick={this.handleClick}>
        {this.props.todo.name} has {this.props.todo.pomodoros}
      </li>;
    }
    return (
      view
    );
  }


})
