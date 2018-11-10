import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

class Map extends Component {

  static propTypes = {
    coordinatesToCenter: PropTypes.object.isRequired
  }

  static defaultProps = {
    zoom: 10
  }

  componentWillMount = () => {
    window.initMap = this.initMap
  }

  initMap = () => {
    this.map = new window.google.maps.Map(document.getElementById('map'), {
      center: {
        lat: this.props.coordinatesToCenter.latitude,
        lng: this.props.coordinatesToCenter.longitude
      },
      zoom: this.props.zoom
    })
    this.renderMarkers(this.props)
  }

  renderMarkers = ({markers}) => markers.map( marker => new window.google.maps.Marker({
    position: marker.position,
    map: this.map
  }))

  render() {
    return (
      <div
        id="map"
        style={myStyle.map}
      />
    )
  }
}


const myStyle = {
  map: {
    height: '100%'
  }
}

export default Map