import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'

const withNavigation = (WrappedComponent, config) => {
  return class extends Component {
    getBack = () => {
      const { show, label, path } = config.back
      if (!show) {
        return <div />
      }

      return <Link to={path}>{label}</Link>
    }

    getForward = () => {
      const { show, label, path } = config.forward
      if (!show) {
        return <div />
      }

      return <Link to={path}>{label}</Link>
    }

    render = () => {
      return (
        <div className="column">
          <WrappedComponent {...this.props} />
          <div className="row">
            {this.getBack()}
            {this.getForward()}
          </div>
        </div>
      )
    }
  }
}

withNavigation.propTypes = {
  back: PropTypes.string,
  forward: PropTypes.string,
}

withNavigation.defaultProps = {
  back: {
    show: true,
    path: '',
    label: 'Back',
  },
  forward: {
    show: true,
    path: '',
    label: 'Forward',
  },
}

export default withNavigation
