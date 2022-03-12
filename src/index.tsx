import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const widgetDiv = document.querySelectorAll('.saggia-widget')

widgetDiv.forEach((div) => {
  ReactDOM.render(<App />, div)
})
