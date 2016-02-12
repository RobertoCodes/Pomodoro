window.Timer = React.createClass({

    getInitialState: function () {
      return ({time: 0, started: false});
    },

    handleStartTimer: function () {
      if (!this.state.started) {
        this.setState({started: true});
      }
      this.intervalId = setInterval( function () {
        seconds = this.state.time
        this.setState({time: seconds + 1});
        if (this.state.time > 2*60) {
          this.stopTimer();
        }
      }.bind(this), 1000);
    },

    stopTimer: function () {
      this.setState({started: false});
      clearInterval(this.intervalId);
      this.removePomodoro();
    },

    removePomodoro: function () {
      var todo = {pomodoros: this.props.todo.pomodoros - 1, id: this.props.todo.id};
      ApiUtil.editTodo(todo);
    },

    getTimeLeft: function () {
      var totalTime = 2*60;
      var timeLeft = 2*60 - this.state.time;
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
      if (this.state.started) {
        return (
          <div>
            {this.getTimeLeft()}
          </div>
        );
      } else {
        return (
          <button onClick={this.handleStartTimer}>Start a Pom!</button>
        )
      }
    }

});
