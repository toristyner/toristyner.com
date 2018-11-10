import React, { Component } from 'react'

class Map extends Component {

  componentWillMount = () => {
    window.initMap = this.initMap
  }

  initMap = () => {
    console.log("Init Map")
    this.map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    })
  }

  render() {
    return (
      <div className="container">
        <div>Map</div>
        <div
          id="map"
          style={myStyle.map}></div>
      </div>
    )
  }
}


const myStyle = {
  map: {
    height: '100%'
  }
}

export default Map