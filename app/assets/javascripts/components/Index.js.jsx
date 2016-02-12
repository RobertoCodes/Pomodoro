window.Index = React.createClass({

  render: function () {
    return(
      <div>
        <h1>To-Do List</h1>
        {this.props.children}
      </div>
    );
  }
});
