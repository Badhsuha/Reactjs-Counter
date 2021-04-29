import React, { Component } from "react";

import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.counters.length > 0 ? (
          this.props.counters.map((counter) => (
            <Counter
              key={counter.id}
              counter={counter}
              onIncriment={this.props.onIncriment}
              onDelete={this.props.onDelete}
              onDecriment={this.props.onDecriment}
            />
          ))
        ) : (
          <h4>No counters </h4>
        )}
      </React.Fragment>
    );
  }
}

export default Counters;
