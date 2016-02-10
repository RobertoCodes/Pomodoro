window.Index = React.createClass({

  render: function () {
    debugger;
    return(
      <div>
        <h2>Pomodoro</h2>
        {this.props.children}
      </div>
    );
  }
});
