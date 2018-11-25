import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getPlaceById } from '../services/placeService'

class MapView extends Component {
  componentWillMount = () => {
    const { match } = this.props
    this.setState({
      ...getPlaceById(match.params.tripId),
    })
  }

  render() {
    return (
      <div>
        <div>{this.state.name}</div>
        <div>{this.state.description}</div>
        <div>{this.state.dateRange}</div>
        <ul>
          {this.state.markers.map(m => (
            <Link to={`${this.props.match.url}/${m.id}`}>
              <li>{m.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    )
  }
}

export default MapView
