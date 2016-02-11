window.Timer = React.createClass({

  getInitialState: function () {
    return ({time: 0});
  },

  componentDidMount: function () {
    setInterval( function () {
      seconds = this.state.time
      this.setState({time: seconds + 1});
    }.bind(this), 1000);
  },

});
