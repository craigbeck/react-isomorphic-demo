import React from "react";


export default class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { loading: true, time: null };
    this.Positon = null;
  }

  componentWillMount () {
    console.log("App componentWillMount");

    if (__CLIENT__) {

      console.log("Render client");
      const tid = setInterval(() => {
        this.setState({ time: (new Date()).valueOf() });
      }, 100);

      require.ensure([], (require) => {

        setTimeout(() => {
          const Position = require("./Position").default;
          console.log("resolved", Position);
          clearInterval(tid);
          this.Position = Position;
          this.setState({ loading: false });
        }, 4500);
      });

    } else {
      console.log("Render server");
    }
  }

  componentDidMount() {
    console.log("App componentDidMount");
  }

  render() {
    return <div>
      <div>app rendered</div>
      <div>{this.state.time}</div>
      { (this.Position) ? <this.Position position={this.state}/> : <div>loading...</div> }
    </div>;
  }
}
