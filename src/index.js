import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import ReduxStore from './ReduxStore'
import { Provider } from 'react-redux'
import './App.css'
const Application = () => (
  <Provider store={ReduxStore}>
    <App />
  </Provider>
)
ReactDOM.render(<Application />, document.getElementById('root'))