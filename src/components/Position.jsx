import React from "react";

export default class Position extends React.Component {

  componentWillMount() {
    console.log("Position componentDidMount");
    if (__CLIENT__) {
      navigator.geolocation.getCurrentPosition((position) => {
          const { coords: { accuracy, altitude, altitudeAccuracy, heading, latitude, longitude, speed }, timestamp } = position;
          this.setState({ coords: { accuracy, altitude, altitudeAccuracy, heading, latitude, longitude, speed }, timestamp });
      });
    }
  }

  render() {
    return <pre>{JSON.stringify(this.state, null, 2)}</pre>
  }
}
