import React, { Component } from 'react'
import { getPlaceById } from '../services/placeService'
import PropTypes from 'prop-types'

class Detail extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount = () => {
    const { match } = this.props
    this.setState({
      ...getPlaceById(match.params.tripId, match.params.placeId),
    })
  }

  render() {
    return (
      <div>
        <div>{this.state.name}</div>
      </div>
    )
  }
}

Detail.propTypes = {}

export default Detail
