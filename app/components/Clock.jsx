const React = require('react');

class Clock extends React.Component {
    constructor(props) {
    super(props);
    this.state = {count: 0};
    }
  propTypes: {
    totalSeconds: React.PropTypes.number
  }
  formatSeconds = (totalSeconds) => {
    let seconds = totalSeconds % 60;
    let minutes = Math.floor(totalSeconds / 60);

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    return minutes + ':' + seconds;
  }
  render(){
    let {totalSeconds} = this.props;
    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    )
  }
}

module.exports = Clock;
