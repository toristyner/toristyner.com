import React, { Component } from 'react'
import { Map } from '../components'
import { placeService } from '../services'

class Trip extends Component {

  componentWillMount = () => {
    console.log('Trip will mount', placeService.whiteMountainsNH)

  }

  render() {
    return (
      <div className="container">
        <div>Trip</div>
        <Map
          {...placeService.whiteMountainsNH}
        />
      </div>
    )
  }
}


const myStyle = {
  map: {
    height: '100%'
  }
}

export default Trip