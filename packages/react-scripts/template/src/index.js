import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.container'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(React.createElement(App), document.getElementById('root'))
registerServiceWorker()
