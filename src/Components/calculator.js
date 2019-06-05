import React, {Component} from 'react';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      x: '',
      total: '',
    };
  }

  handleButtonClick = () => {};

  handleSubmit = () => {};

  render() {
    return (
      <div style={calcContainer}>
        <div style={screenContainer} />
        <div style={rows}>
          <div style={buttonContainer}>7</div>
          <div style={buttonContainer}>8</div>
          <div style={buttonContainer}>9</div>
          <div style={buttonContainer}>/</div>
        </div>
        <div style={rows}>
          <div style={buttonContainer}>4</div>
          <div style={buttonContainer}>5</div>
          <div style={buttonContainer}>6</div>
          <div style={buttonContainer}>x</div>
        </div>
        <div style={rows}>
          <div style={buttonContainer}>1</div>
          <div style={buttonContainer}>2</div>
          <div style={buttonContainer}>3</div>
          <div style={buttonContainer}>-</div>
        </div>
        <div style={rows}>
          <div style={buttonContainer}>0</div>
          <div style={buttonContainer}>.</div>
          <div style={buttonContainer}>+</div>
          <div style={buttonContainer}>=</div>
        </div>
      </div>
    );
  }
}

const calcContainer = {
  justifyContent: 'center',
};

const screenContainer = {
  border: '.5px solid green',
  padding: '25px',
  width: '200px',
};

const rows = {
  display: 'flex',
  justifyContent: 'center',
};

const buttonContainer = {
  border: '.5px solid green',
  padding: '25px',
};

export default Calculator;
