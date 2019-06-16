import React from 'react';
import './App.css';

class CounterCp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  update = type => {
    if (type === "Inc") {
      this.setState((prevState) => ({count: prevState.count + 1}));
    } else if (type === "Dec") {
      this.setState(({count}) => ({count: count - 1}));
    }
  }

  render() {
    return (
      this.props.render({
        ...this.state,
        ...this.props,
        update: this.update,
      })
    )
  }
}

const Couter = ({count, update}) => (
  <div>
    <button onClick={() => update("Inc")}>Inc</button>
    {count}
    <button onClick={() => update("Dec")}>Dec</button>
  </div>
)
export default class App extends React.Component {
  render() {
    return <CounterCp render={data => <Couter {...data}/>}/>
  }
}
