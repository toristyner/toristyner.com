import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

class Map extends Component {
  static propTypes = {
    coordinatesToCenter: PropTypes.object.isRequired,
  }

  static defaultProps = {
    zoom: 10,
  }

  componentDidMount = () => {
    // hacky wait for google maps script to load
    if (!window.google) {
      setTimeout(() => this.initMap(), 1000)
    } else {
      this.initMap()
    }
  }

  initMap = () => {
    this.map = new window.google.maps.Map(document.getElementById('map'), {
      center: {
        lat: this.props.coordinatesToCenter.latitude,
        lng: this.props.coordinatesToCenter.longitude,
      },
      zoom: this.props.zoom,
    })
    this.props.onMapDidLoad(this.map)
  }

  render() {
    return <div id="map" />
  }
}

export default Map
