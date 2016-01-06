import React from "react";


export default class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }

  componentWillMount () {
    console.log("App componentWillMount");
		if (__CLIENT__) {
			console.log("Render client");
		} else {
      console.log("Render server");
    }
	}

  componentDidMount() {
    console.log("App componentDidMount");
    if (__CLIENT__) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { coords } = position;
        this.setState({ coords });
    });
    }
  }

  render() {
    return <div><div>app rendered</div><pre>{JSON.stringify(this.state, null, 2)}</pre></div>;
  }
}
