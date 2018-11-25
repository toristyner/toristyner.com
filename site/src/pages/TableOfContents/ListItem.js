import React from 'react'
import PropTypes from 'prop-types'

const ListItem = item => (
  <div className="row">
    <div>{item.name}</div>
    <div>----------</div>
    <div>{item.dateRange[0]}</div>
  </div>
)

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
}

export default ListItem
