import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'
import SecondHalf from './components/SecondHalf'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<SecondHalf />, document.getElementById('root'))
registerServiceWorker()