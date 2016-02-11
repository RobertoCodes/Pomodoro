window.TodosIndexItem = React.createClass({

  getInitialState: function () {
    this.setState({expanded: false});
  },

  handleClick: function () {
    expanded = this.state.expanded;
    this.setState({expanded: !expanded});
  },

  render: function () {
    return (
      <li onClick={this.handleClick}>
        {this.props.todo.name} + {this.props.todo.pomodoros}
      </li>
    )
  }






})
