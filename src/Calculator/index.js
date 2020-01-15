import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numPeople: 0,
      meetingLength: 0,
    };
  }

  handleFormSubmit = (event) => {
    const { meetingLength, numPeople } = this.state;
    const averageSalary = 30000;
    const workingDaysPerYear = 261;
    const workingDayHours = 7.5;
    
    this.setState({
      calculatedResult: Math.round((((averageSalary / workingDaysPerYear) / workingDayHours) * numPeople) * meetingLength)
    });
    event.preventDefault();
  }

  handleChange = ({ target }) => {
    const value = target.value ? parseFloat(target.value) : target.value;
    this.setState({[target.name]: value});
  }

  renderResult() {
    if (!this.state.calculatedResult) {
      return null;
    }
    return (
      <React.Fragment>
        <h2>Given an average salary of £30,000 per year, that meeting cost:</h2>
        <h1>£{this.state.calculatedResult}</h1>
      </React.Fragment>
    )
  }

 render() {
    return (
      <div className="calculator">
        <form className="calculator-form" onSubmit={this.handleFormSubmit}>
          <h3>Number of people in the meeting:</h3>
          <input type="number" value={this.state.numPeople} name="numPeople" onChange={this.handleChange} />
          <h3>Length of the meeting in hours:</h3>
          <input type="number" step="any" value={this.state.meetingLength} name="meetingLength" onChange={this.handleChange} />
          <button type="submit">Calculate</button>
        </form>
        {this.renderResult()}
      </div>
    )
  }
}

export default Calculator;
