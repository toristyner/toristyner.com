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
    window.initMap = this.initMap
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
        position: marker.position,
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
    return <div id="map" style={myStyle.map} />
  }
}

const myStyle = {
  map: {
    height: '100%',
  },
  iwContainer: `"
    height: 120px
  "`,
  iwTitle: `"
    font-weight: bold;
    padding: 10px
  "`,
}

export default Map
