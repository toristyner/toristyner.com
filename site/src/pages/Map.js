import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getTripById, getTrips } from '../services/placeService'
import { withNavigation } from '../hoc'

class MapView extends Component {
  constructor() {
    super()
    this.state = {
      trips: [],
    }
  }
  componentWillMount = () => {
    const { tripId } = this.props.match.params
    if (tripId === 'all') {
      this.setState({
        trips: getTrips(),
      })
    } else {
      this.setState({
        trips: [getTripById(tripId)],
      })
    }
  }

  render() {
    return this.state.trips.map(trip => (
      <div key={`trip-${trip.id}`}>
        <div>{trip.name}</div>
        <div>{trip.description}</div>
        <div>{trip.dateRange}</div>
        <ul>
          {trip.markers.map(m => (
            <Link key={`marker-${m.id}`} to={`${trip.id}/${m.id}`}>
              <li>{m.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    ))
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
