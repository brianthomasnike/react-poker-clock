import '../less/main.less';
import ReactDOM from 'react-dom';
import React from 'react';
import Start from './startButton';
import Reset from './stopButton';
import Timer from './timer';
import TimeField from './time';

'use strict';

class PokerClock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isStarted: false,
			seconds: 15,
			reset: false
		};
		this.handleOnStop = this.handleOnStop.bind(this);
		this.handleOnReset = this.handleOnReset.bind(this);
		this.handleTimeEntry = this.handleTimeEntry.bind(this);
	}
	handleOnStop(isStarted) {
		this.setState({
			isStarted: isStarted,
			reset: false
		})
	}
	handleOnReset(isStarted, reset) {
		this.setState({
			isStarted: isStarted,
			reset: true
		})
	}
	handleTimeEntry(seconds) {
		this.setState({
			seconds: seconds
		});
		this.handleOnReset(false, true);
	}
	render() {
		return (
			<div>
				<Timer 
					isStarted={this.state.isStarted}
					seconds={this.state.seconds}
					onComplete={this.handleOnStop}
					reset={this.state.reset}
				/>
				<TimeField
					timeEntry={this.handleTimeEntry}
					seconds={this.state.seconds}
				/>
				<div>
					<Start 
						isStarted={this.state.isStarted} 
						onStart={this.handleOnStop}
					/>
					<Reset 
						isStarted={this.state.isStarted}
						reset={this.state.reset}
						onReset={this.handleOnReset}
						//disabled={!this.props.isStarted} 
      				variant='fab' 
      				color='primary' 
					/>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
   React.createElement(PokerClock, null),
   document.getElementById('timer')
)
