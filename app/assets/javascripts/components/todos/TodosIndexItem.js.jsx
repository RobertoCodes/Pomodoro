window.TodosIndexItem = React.createClass({

  getInitialState: function () {
    return ({expanded: false});
  },

  handleClick: function () {
    expanded = this.state.expanded;
    this.setState({expanded: !expanded});
  },

  render: function () {
    debugger;
    var view;
    if (!this.state.expanded) {
      view = <li className="group" onClick={this.handleClick}>
              {this.props.todo.name}
             </li>;
    } else {
      view = <li className="group" onClick={this.handleClick}>
        <span>{this.props.todo.name} {this.props.todo.pomodoros}</span> x <figure id="small-tomato"></figure>
      </li>;
    }
    return (
      view
    );
  }


})
