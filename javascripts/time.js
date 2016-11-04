var React = require('react');

class TimeField extends React.Component {
  constructor() {
    super();
    this.state = {value: 0};
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
  	this.setState({value: event.target.value});
  }
  handleKeyPress(event) {
  	if (event.key === 'Enter') {
  		event.preventDefault();
  		this.props.timeEntry(parseInt(event.target.value));
  	}
  }
  handleSubmit(event) {
  	this.props.timeEntry(parseInt(this.state.value));
  }
  render() {
    return (
      <div>
      	Enter Time in seconds: 
      	<input 
      		type="number" 
      		name="seconds" 
      		min="1" 
      		max="1800"
      		//step="1"
      		placeholder={this.props.seconds}
      		value={this.state.value} 
      		onChange={this.handleChange}
      		onKeyPress={this.handleKeyPress}
      		onBlur={this.handleKeyPress}
      	/>
      	<button onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
};


export default TimeField;