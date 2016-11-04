
import React from 'react';
import ReactCountdownClock from 'react-countdown-clock';

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			remainingSeconds: this.props.seconds,
			isStarted: this.props.isStarted,
			reset: this.props.reset
		};
		this.handleOnComplete = this.handleOnComplete.bind(this);
		this.handleOnPause = this.handleOnPause.bind(this);
		this.handlOnReset = this.handleOnReset.bind(this);
	}
	handleOnComplete() {
		this.state.remainingSeconds = this.props.seconds+.5;
		this.props.onComplete(this.state.isStarted);
	}
	handleOnPause(remainingSeconds) {
		this.state.remainingSeconds = remainingSeconds;
	}
	handleOnReset() {
		this.props.reset = this.props.reset;
	}
	render() {
		var seconds = this.state.remainingSeconds;
		return(
       React.createElement(ReactCountdownClock, {
         seconds: seconds,
         alpha: 1,
         weight: 30,
         showMilliseconds: false,
         //leave fontSize as "auto" so the font will change size with number of digits displayed
         size: 600,
         onComplete: this.handleOnComplete,
         start: this.props.isStarted,
         onPause: this.handleOnPause,
         reset: this.props.reset,
         onReset: this.handleOnReset
       }));
	}
};

export default Timer;