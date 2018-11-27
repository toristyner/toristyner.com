import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

class Map extends Component {
  static propTypes = {
    coordinatesToCenter: PropTypes.object.isRequired,
  }

  static defaultProps = {
    zoom: 10,
    markers: [],
    loading: true,
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
    this.renderMarkers(this.props)
  }

  renderInfoWindow = props => `
    <div style=${myStyle.iwContainer}>
      <div style=${myStyle.iwTitle}>${props.name}</div>
    </div>
  `

  renderMarkers = ({ markers }) => {
    markers.map(marker => {
      const content = this.renderInfoWindow(marker)
      let iw = new window.google.maps.InfoWindow({
        content: content,
      })

      let m = new window.google.maps.Marker({
        position: {
          lat: marker.position.latitude,
          lng: marker.position.longitude,
        },
        map: this.map,
      })
      m.addListener('click', () => this.onClickMarker(marker, m, iw))
    })
  }

  onClickMarker = (data, m, iw) => {
    iw.open(this.map, m)
    console.log(data)
  }

  render() {
    return <div id="map" />
  }
}

const myStyle = {
  iwContainer: `"
    height: 120px
  "`,
  iwTitle: `"
    font-weight: bold;
    padding: 10px
  "`,
}

export default Map
