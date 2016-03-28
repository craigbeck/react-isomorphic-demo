import React from "react";
import Loader from "./Loader";


export default class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      time: null,
      component: Loader
    };
    this.Positon = null;
  }

  componentWillMount () {
    console.log("App componentWillMount");

    if (__CLIENT__) {

      console.log("Render client");
      const tid = setInterval(() => {
        this.setState({
          time: (new Date()).valueOf()
        });
      }, 100);

      require.ensure([], (require) => {

        setTimeout(() => {
          const Position = require("./Position").default;
          console.log("resolved", Position);
          clearInterval(tid);
          this.setState({
            component: Position
          });
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
      <this.state.component/>
    </div>;
  }
}
