import React, { Component } from 'react'
import { GoogleMap } from '../../components'
import { getTripById, getTrips } from '../../services/placeService'
import { withNavigation } from '../../hoc'
import { getInfoWindow } from './InfoWindows'

const DEFAULT_COORDS = {
  latitude: 40.337128,
  longitude: -101.703484,
}

class MapView extends Component {
  constructor() {
    super()
    this.state = {
      showAll: false,
      initCenterCoords: { ...DEFAULT_COORDS },
      trips: [],
    }
  }
  componentWillMount = () => {
    const { tripId } = this.props.match.params
    if (tripId === 'all') {
      this.setState({
        showAll: true,
        trips: getTrips(),
        zoom: 3,
      })
    } else {
      const trip = getTripById(tripId)
      this.setState({
        showAll: false,
        initCenterCoords: { ...trip.coordinatesToCenter },
        trips: [trip],
        zoom: trip.zoom,
      })
    }
  }

  onMapDidLoad = mapRef => {
    this.mapRef = mapRef
    const markers = this.getMarkers()
    this.renderMarkers({ markers })
  }

  getMarkers = () => {
    if (this.state.showAll) {
      return this.state.trips.map(t => ({
        id: t.id,
        name: t.name,
        dateRange: t.dateRange,
        types: ['trip'],
        position: {
          ...t.coordinatesToCenter,
        },
      }))
    }
    return this.state.trips[0].markers
  }

  renderMarkers = ({ markers }) => {
    return markers.map(marker => {
      let iw = new window.google.maps.InfoWindow({
        content: getInfoWindow(
          this.state.showAll ? 'trip' : marker.types[0],
          marker
        ),
      })

      let m = new window.google.maps.Marker({
        position: {
          lat: marker.position.latitude,
          lng: marker.position.longitude,
        },
        map: this.mapRef,
      })
      m.addListener('click', () => this.onClickMarker(m, iw))
    })
  }

  onClickMarker = (markerRef, infoWindow) => {
    infoWindow.open(this.mapRef, markerRef)
  }

  render() {
    return (
      <GoogleMap
        coordinatesToCenter={this.state.initCenterCoords}
        onMapDidLoad={this.onMapDidLoad}
        zoom={this.state.zoom}
      />
    )
  }
}

export default withNavigation(MapView, {
  back: {
    show: true,
    label: 'TOC',
    path: '/trips',
  },
  forward: {
    show: false,
  },
})
