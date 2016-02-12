window.Index = React.createClass({

  render: function () {
    return(
      <div id="todo">
        <h1>Your To-Do List</h1>
        {this.props.children}
      </div>
    );
  }
});
