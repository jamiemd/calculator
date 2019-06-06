import React, {Component} from 'react';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      displayNumber: '',
      numbersArray: [],
      runningTotal: 0,
      operator: '',
      operatorClicked: false,
    };
  }

  handleClearButtonClick = () => {
    this.setState({runningTotal: '', displayNumber: ''});
  };

  // update display number
  handleNumberButtonClick = digit => {
    let newDisplayNumber = '';
    newDisplayNumber = this.state.displayNumber + digit.toString();
    this.setState({displayNumber: newDisplayNumber});
  };

  handleOperatorButtonClick = operatorInput => {
    console.log('displayNumber', this.state.displayNumber);
    console.log('numbersArray', this.state.numbersArray);

    let newNumbersArray = this.state.numbersArray.push(
      this.state.displayNumber
    );
    this.setState({
      operator: operatorInput,
      operatorClicked: true,
      displayNumber: '',
      // numbersArray: newNumbersArray,
    });
    console.log('numbersArray', this.state.numbersArray);
  };

  handleOperation = () => {
    let newDisplayNumber = '';
    let newRunningTotal = '';
    if (this.state.operator === '/') {
      newRunningTotal = this.state.runningTotal / newDisplayNumber;
      this.setState({runningTotal: newRunningTotal});
    } else if (this.state.operator === 'x') {
      newRunningTotal = this.state.runningTotal * newDisplayNumber;
      this.setState({runningTotal: newRunningTotal});
    } else if (this.state.operator === '-') {
      newRunningTotal = this.state.runningTotal - newDisplayNumber;
      this.setState({runningTotal: newRunningTotal});
    } else if (this.state.operator === '+') {
      newRunningTotal = this.state.runningTotal + newDisplayNumber;
      this.setState({runningTotal: newRunningTotal});
    }
    this.setState({runningTotal: '', displayNumber: ''});
    console.log('runningTotal', this.state.runningTotal);
    console.log('displayNumber', this.state.displayNumber);
  };

  handleEqualsButtonClick = () => {
    this.handleOperation();
  };

  render() {
    console.log('runningTotal', this.state.runningTotal);
    return (
      <div style={calcContainer}>
        <div style={screenContainer}>{this.state.displayNumber}</div>
        <div>
          <button
            style={buttonContainer}
            onClick={() => this.handleClearButtonClick()}
          >
            C
          </button>
        </div>
        <div style={rows}>
          <button
            style={buttonContainer}
            onClick={() => this.handleNumberButtonClick(7)}
          >
            7
          </button>
          <button
            style={buttonContainer}
            onClick={() => this.handleNumberButtonClick(8)}
          >
            8
          </button>
          <button
            style={buttonContainer}
            onClick={() => this.handleNumberButtonClick(9)}
          >
            9
          </button>
          <button
            style={buttonContainer}
            onClick={() => this.handleOperatorButtonClick('/')}
          >
            /
          </button>
        </div>
        <div style={rows}>
          <button
            style={buttonContainer}
            onClick={() => this.handleNumberButtonClick(4)}
          >
            4
          </button>
          <button
            style={buttonContainer}
            onClick={() => this.handleNumberButtonClick(4)}
          >
            5
          </button>
          <button
            style={buttonContainer}
            onClick={() => this.handleNumberButtonClick(4)}
          >
            6
          </button>
          <button style={buttonContainer}>x</button>
        </div>
        <div style={rows}>
          <button
            style={buttonContainer}
            onClick={() => this.handleNumberButtonClick(1)}
          >
            1
          </button>
          <button
            style={buttonContainer}
            onClick={() => this.handleNumberButtonClick(2)}
          >
            2
          </button>
          <button
            style={buttonContainer}
            onClick={() => this.handleNumberButtonClick(3)}
          >
            3
          </button>
          <button
            style={buttonContainer}
            onClick={() => this.handleOperatorButtonClick('-')}
          >
            -
          </button>
        </div>
        <div style={rows}>
          <button
            style={buttonContainer}
            onClick={() => this.handleNumberButtonClick(4)}
          >
            0
          </button>
          <button
            style={buttonContainer}
            onClick={() => this.handleDecimalButtonClick('.')}
          >
            .
          </button>
          <button
            style={buttonContainer}
            onClick={() => this.handleOperatorButtonClick('+')}
          >
            +
          </button>
          <button
            style={buttonContainer}
            onClick={() => this.handleEqualsButtonClick('=')}
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

const calcContainer = {
  justifyContent: 'center',
};

const screenContainer = {
  margin: 'auto',
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
