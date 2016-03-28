import React from "react";
import Loader from "./Loader";

export default class Position extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = {
      loading: true
    };
  }

  componentWillMount() {
    console.log("Position componentDidMount");
    if (__CLIENT__) {
      navigator.geolocation.getCurrentPosition((position) => {
          const { coords: { accuracy, altitude, altitudeAccuracy, heading, latitude, longitude, speed }, timestamp } = position;
          this.setState({
            loading: false,
            coords: { accuracy, altitude, altitudeAccuracy, heading, latitude, longitude, speed },
            timestamp
          });
      });
    }
  }

  render() {
    if (this.state.loading) {
      return <Loader/>
    }
    return <div>
      <pre>{JSON.stringify(this.state.coords, null, 2)}</pre>
    </div>
  }
}
