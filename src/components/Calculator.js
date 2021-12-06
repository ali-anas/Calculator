import React, { Component } from "react";
import Button from "./Button";
import InputField from "./InputField";
import ClearButton from "./ClearButton";
import * as math from "mathjs";

import "../styles/Calculator.css";

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      hasError: false,
    };
  }

  addToInput = (val) => {
    if (this.state.hasError) {
      this.setState({ hasError: false });
    }
    this.setState({ input: this.state.input + val });
  };

  handleEqual = () => {
    try {
      const res = math.evaluate(this.state.input); // note: eval function can lead to no error handling
      this.setState({ input: res });
    } catch (err) {
      this.setState({ hasError: true });
      console.log("something is not good with input");
    }
  };

  clearInput = () => {
    this.setState({
      input: "",
      hasError: false,
    });
  };

  render() {
    return (
      <div className="calculator">
        <div className="row">
          <InputField input={this.state.input} />
        </div>
        <div className="row">
          <div className="clear-btn">
            <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
          </div>
          <div className="btn">
            <Button handleClick={this.addToInput}>/</Button>
          </div>
        </div>
        <div className="row">
          <div className="btn">
            <Button handleClick={this.addToInput}>7</Button>
          </div>
          <div className="btn">
            <Button handleClick={this.addToInput}>8</Button>
          </div>
          <div className="btn">
            <Button handleClick={this.addToInput}>9</Button>
          </div>
          <div className="btn">
            <Button handleClick={this.addToInput}>-</Button>
          </div>
        </div>
        <div className="row">
          <div className="btn">
            <Button handleClick={this.addToInput}>4</Button>
          </div>
          <div className="btn">
            <Button handleClick={this.addToInput}>5</Button>
          </div>
          <div className="btn">
            <Button handleClick={this.addToInput}>6</Button>
          </div>
          <div className="btn">
            <Button handleClick={this.addToInput}>+</Button>
          </div>
        </div>
        <div className="row">
          <div className="btn">
            <Button handleClick={this.addToInput}>1</Button>
          </div>
          <div className="btn">
            <Button handleClick={this.addToInput}>2</Button>
          </div>
          <div className="btn">
            <Button handleClick={this.addToInput}>3</Button>
          </div>
          <div className="btn">
            <Button handleClick={() => this.handleEqual()}>=</Button>
          </div>
        </div>
        {this.state.hasError ? (
          <div className="err-msg">Something is not good with input!</div>
        ) : null}
      </div>
    );
  }
}

export default Calculator;
