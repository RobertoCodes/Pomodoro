window.Index = React.createClass({

  render: function () {
    return(
      <div>
        <h2>To-Do List</h2>
        {this.props.children}
      </div>
    );
  }
});
