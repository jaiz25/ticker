import React, {Component} from 'react'


class Ticker extends Component {
  constructor () {
    super();
    this.state = {
      count: 0,
    }
  }

  //LifeCycle methods
  componentDidMount () {
    setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }

  shouldComponentUpdate(nextProps, nextState) {
    // other way : return(nextState.count % 3 === 0)
    if(nextState.count % 3 === 0) {
      return this.state.count = nextState.count;
    }
  }

  resetTicker = () => {
    this.setState ({
      count: 0,
    })
  }


  render () {
    return(
      <div>
        <div>
          <p> The ticker is: {this.state.count}</p>
          <button type="button" onClick={this.resetTicker}>Reset Ticker</button>
        </div>
      </div>
    );
  };
};

export default Ticker;
