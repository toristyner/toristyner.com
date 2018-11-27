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
          <div className="container">
            <WrappedComponent {...this.props} />
          </div>
          <div className="nav-bar">
            <div className="back">{this.getBack()}</div>
            <div className="forward">{this.getForward()}</div>
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
