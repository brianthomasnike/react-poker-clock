var React = require('react');
var Button  = require('muicss/lib/react/button');

class StartButton extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
     this.props.onStart(!this.props.isStarted);
  }
  render() {
    return (
      <Button
        variant='fab' 
        color='primary' 
        onClick={this.handleClick} >
        {this.props.isStarted ? 'pause' : 'start'}
      </Button>
    );
  }
};


export default StartButton;