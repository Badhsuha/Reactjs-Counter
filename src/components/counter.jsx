import React, { Component } from "react";

class Counter extends Component {
  render() {
    const setCounter = () => {
      return this.props.counter.value === 0 ? "zero" : this.props.counter.value;
    };

    const setClassName = () => {
      let classname = "badge m-2 badge-";
      classname += this.props.counter.value === 0 ? "warning" : "primary";
      return classname;
    };

    const setBtnDisabled = () => {
      return this.props.counter.value === 0 ? true : false;
    };

    return (
      <React.Fragment>
        <div
          className="d-flex justify-content-between"
          style={{ width: 200, height: 50 }}
        >
          <span
            className={setClassName()}
            style={{ paddingTop: 10, width: 30 }}
          >
            {setCounter()}{" "}
          </span>
          <button
            className="btn btn-secondory btn-sm m-2"
            onClick={() => this.props.onDecriment(this.props.counter)}
            disabled={setBtnDisabled()}
          >
            -
          </button>
          <button
            className="btn btn-secondory btn-sm m-2"
            onClick={() => this.props.onIncriment(this.props.counter)}
          >
            +
          </button>
          <button
            className="btn btn-danger btn-sm m-2"
            onClick={() => this.props.onDelete(this.props.counter)}
          >
            X
          </button>
          <br></br>
        </div>
      </React.Fragment>
    );
  }
}
export default Counter;
