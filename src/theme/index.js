const { createTheme } = require("@material-ui/core")
const { blue } = require("@material-ui/core/colors")

export const theme = createTheme({
  palette: {
    primary: blue,
    secondary: {
      main: '#4caf50',
      contrastText: 'white'
    }
  },
  overrides: {
    PrivateNotchedOutline: {
      root: {
        borderWidth: 2
      }
    },
    MuiAppBar: {
      root: {
        boxShadow: 'none'
      }
    },
    MuiCard: {
      root: {
        boxShadow: '0 0 6px rgba(0, 0, 0, .25)',
        borderRadius: 20
      }
    },
    MuiButton: {
      contained: {
        boxShadow: 'none'
      }
    },
  }
})