window.Timer = React.createClass({

    getInitialState: function () {
      return ({time: 0, started: false, notification: false});
    },

    handleStartTimer: function () {
      if (!this.state.started) {
        this.setState({started: true});
      }
      this.intervalId = setInterval( function () {
        seconds = this.state.time
        this.setState({time: seconds + 1});
        if (this.state.time > .25*60) {
          this.stopTimer();
        }
      }.bind(this), 1000);
    },

    stopTimer: function () {
      this.setState({started: false, notification: true});
      clearInterval(this.intervalId);
      this.removePomodoro();
    },

    removePomodoro: function () {
      var todo = {pomodoros: this.props.todo.pomodoros - 1, id: this.props.todo.id};
      ApiUtil.editTodo(todo);
    },

    getTimeLeft: function () {
      var totalTime = .25*60;
      var timeLeft = .25*60 - this.state.time;
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

    handleCancel: function () {
      clearInterval(this.intervalId);
      this.setState({started: false, time: 0});
    },

    handleEarlyFinish: function () {
      this.setState({started: false});
      this.removePomodoro();
    },

    handleHideNotification: function () {
      this.setState({notification: false});
    },

    render: function () {
      if (this.state.started) {
        return (
          <div id="timer">
            <span id="reminder">Focus on "{this.props.todo.name}"</span>
            <br/>
            {this.getTimeLeft()}
            <br/>
            <button onClick={this.handleCancel}>Cancel</button>
            <button onClick={this.handleEarlyFinish}>Finish Early!</button>
          </div>
        );
      } else if (this.state.notification) {
        return (
          <div>
            <span id="notification">Pomodoro Crushed! <figure id="crushed-tomato"/>
              <button id="notification-button" onClick={this.handleHideNotification}>Continue</button>
            </span>
            <button onClick={this.handleStartTimer}>Start a Pom!</button>
          </div>
        );
      } else if (this.props.todo.pomodoros > 0) {

        return (<button onClick={this.handleStartTimer}>Start a Pom!</button>);

      } else {

        return (<div></div>);

      }
    }

});
