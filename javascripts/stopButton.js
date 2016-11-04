var React = require('react');
var Button  = require('muicss/lib/react/button')

class ResetButton extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.onReset(!this.props.isStarted, !this.props.reset);
  }
  render() {
    return (
      <Button 
        //disabled={!this.props.isStarted} 
        variant='fab' 
        color='primary' 
        onClick={this.handleClick}>
        Reset
      </Button>
    );
  }
};

export default ResetButton;