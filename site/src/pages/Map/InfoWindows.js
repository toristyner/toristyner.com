import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Link } from 'react-router-dom'

export const getInfoWindow = (type, data) => {
  let content = ''
  switch (type) {
    case 'trip':
      content = tripInfoWindow(data)
      break
    default:
      content = defaultInfoWindow(data)
  }
  return ReactDOMServer.renderToString(content)
}

const tripInfoWindow = data => (
  <div>
    <div>{data.name}</div>
    <div onClick={() => console.log('clicked')}>Click Me</div>
  </div>
)

const defaultInfoWindow = data => (
  <div>
    <div>{data.name}</div>
  </div>
)

const myStyle = {
  iwContainer: `"
    height: 120px
  "`,
  iwTitle: `"
    font-weight: bold;
    padding: 10px
  "`,
}
