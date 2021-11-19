import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './utils/serviceWorker'
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(<BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'))

// For offline support change unregister() to register()  https://bit.ly/CRA-PWA
serviceWorker.register()
