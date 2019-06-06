import React, {Component} from 'react';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      displayNumber: '',
      operationString: [],
    };
  }

  handleClearButtonClick = () => {
    this.setState({operationString: [], displayNumber: ''});
    console.log('operationString', this.state.operationString);
  };

  handleNumberButtonClick = digit => {
    let newDisplayNumber = '';
    newDisplayNumber = this.state.displayNumber + digit;
    let newOperationArray = this.state.operationString + digit;
    this.setState({
      operationString: newOperationArray,
      displayNumber: newDisplayNumber,
    });
  };

  handleOperatorButtonClick = operator => {
    console.log('operationString', this.state.operationString);
    let currentOperationArray = this.state.operationString;
    let newOperationArray = currentOperationArray + operator;
    this.setState({
      operationString: newOperationArray,
      displayNumber: '',
    });
  };

  handleEqualsButtonClick = () => {
    console.log('operationString', this.state.operationString);
    this.setState({
      displayNumber: eval(this.state.operationString),
    });
  };

  render() {
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
            onClick={() => this.handleNumberButtonClick('7')}
          >
            7
          </button>
          <button
            style={buttonContainer}
            onClick={() => this.handleNumberButtonClick('8')}
          >
            8
          </button>
          <button
            style={buttonContainer}
            onClick={() => this.handleNumberButtonClick('9')}
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
            onClick={() => this.handleNumberButtonClick('4')}
          >
            4
          </button>
          <button
            style={buttonContainer}
            onClick={() => this.handleNumberButtonClick('5')}
          >
            5
          </button>
          <button
            style={buttonContainer}
            onClick={() => this.handleNumberButtonClick('6')}
          >
            6
          </button>
          <button
            style={buttonContainer}
            onClick={() => this.handleOperatorButtonClick('*')}
          >
            x
          </button>
        </div>
        <div style={rows}>
          <button
            style={buttonContainer}
            onClick={() => this.handleNumberButtonClick('1')}
          >
            1
          </button>
          <button
            style={buttonContainer}
            onClick={() => this.handleNumberButtonClick('2')}
          >
            2
          </button>
          <button
            style={buttonContainer}
            onClick={() => this.handleNumberButtonClick('3')}
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
            onClick={() => this.handleNumberButtonClick('4')}
          >
            0
          </button>
          <button
            style={buttonContainer}
            onClick={() => this.handleNumberButtonClick('.')}
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
