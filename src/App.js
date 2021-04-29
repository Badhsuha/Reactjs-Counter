import React, { Component } from "react";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  render() {
    const onIncriment = (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index].value++;
      this.setState({ counters });
    };

    const onDecriment = (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index].value--;
      this.setState({ counters });
    };

    const onDelete = (counter) => {
      const counters = this.state.counters.filter((c) => c.id !== counter.id);
      this.setState({ counters });
    };

    const addNewCounter = () => {
      const counters = [...this.state.counters];
      counters.push({ id: Math.floor(Math.random() * 100001) + 1, value: 0 });
      this.setState({ counters });
    };

    return (
      <React.Fragment>
        <div className="d-flex justify-content-between" style={{ width: 280 }}>
          <h1>Counter</h1>
          <button
            className="btn btn-success btn-sm m-2"
            onClick={addNewCounter}
          >
            Add
          </button>
        </div>

        <Counters
          counters={this.state.counters}
          onIncriment={onIncriment}
          onDecriment={onDecriment}
          onDelete={onDelete}
        />
      </React.Fragment>
    );
  }
}

export default App;
