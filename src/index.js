import React from 'react'
import ReactDOM from 'react-dom'
import { CssBaseline } from '@material-ui/core'
import App from 'components/App'
import { UsersProvider } from 'context/UsersContext'

ReactDOM.render(
  <>
    <CssBaseline />
    <UsersProvider>
      <App />
    </UsersProvider>
  </>,
  document.getElementById('root')
)
