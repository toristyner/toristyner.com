import React, { Component } from 'react'
import { GoogleMap } from '../components'
import { Link } from 'react-router-dom'
import { getTripById, getTrips } from '../services/placeService'
import { withNavigation } from '../hoc'

const DEFAULT_COORDS = {
  latitude: 40.337128,
  longitude: -101.703484,
}

class MapView extends Component {
  constructor() {
    super()
    this.state = {
      initCenterCoords: { ...DEFAULT_COORDS },
      trips: [],
    }
  }
  componentWillMount = () => {
    const { tripId } = this.props.match.params
    if (tripId === 'all') {
      this.setState({
        trips: getTrips(),
        zoom: 3,
      })
    } else {
      const trip = getTripById(tripId)
      this.setState({
        initCenterCoords: { ...trip.coordinatesToCenter },
        trips: [trip],
        zoom: trip.zoom,
      })
    }
  }

  getMarkers = () => {
    if (this.state.trips.length === 1) {
      return this.state.trips[0].markers
    } else {
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
  }

  render() {
    return (
      <GoogleMap
        coordinatesToCenter={this.state.initCenterCoords}
        markers={this.getMarkers()}
        zoom={this.state.zoom}
      />
    )

    // return this.state.trips.map(trip => (
    //   <div key={`trip-${trip.id}`}>
    //     <div>{trip.name}</div>
    //     <div>{trip.description}</div>
    //     <div>{trip.dateRange}</div>
    //     <ul>
    //       {trip.markers.map(m => (
    //         <Link key={`marker-${m.id}`} to={`${trip.id}/${m.id}`}>
    //           <li>{m.name}</li>
    //         </Link>
    //       ))}
    //     </ul>
    //   </div>
    // ))
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
