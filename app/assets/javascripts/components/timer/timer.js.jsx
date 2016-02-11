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

    getTimeLeft: function () {
      var totalTime = 25*60;
      var timeLeft = 25*60 - this.state.time;
      var minutesLeft = parseInt(timeLeft/60);
      var secondsLeft = timeLeft%60;
      var minutesString;
      var secondsString;

      if (minutesLeft < 10) {
        minutesString = "0" + minutesLeft;
      } else {
        minutesString = "" + minutesLeft;
      }

      if (secondsLeft < 10) {
        secondsString = "0" + secondsLeft;
      } else {
        secondsString = "" + secondsLeft;
      }
      return (minutesString + ":" + secondsString);
    },

    render: function () {
      return (
        <div>
          {this.getTimeLeft()}
        </div>
      );
    }

});
