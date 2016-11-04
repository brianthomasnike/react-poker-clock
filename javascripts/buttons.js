import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'muicss/lib/react/button';

class Example extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Button variant="fab">+</Button>
          <Button variant="fab" color="primary">+</Button>
          <Button variant="fab" color="danger">+</Button>
          <Button variant="fab" color="accent">+</Button>
        </div>
        <div>
          <Button variant="fab" disabled={true}>+</Button>
          <Button variant="fab" color="primary" disabled={true}>+</Button>
          <Button variant="fab" color="danger" disabled={true}>+</Button>
          <Button variant="fab" color="accent" disabled={true}>+</Button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById('buttons'));