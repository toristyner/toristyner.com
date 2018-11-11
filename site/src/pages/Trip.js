import React, { Component } from 'react'
import { Map } from '../components'
import { placeService } from '../services'

class Trip extends Component {
  render() {
    return (
      <div className="container">
        <div>Trip</div>
        <Map {...placeService.whiteMountainsNH} />
      </div>
    )
  }
}

export default Trip
