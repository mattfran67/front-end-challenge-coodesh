import React from 'react'
import ReactDOM from 'react-dom'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import App from 'components/App'
import { UsersProvider } from 'context/UsersContext'
import { theme } from 'theme'

ReactDOM.render(
  <>
    <CssBaseline />
    <UsersProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </UsersProvider>
  </>,
  document.getElementById('root')
)
