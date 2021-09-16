import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

export const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography>
          Pharma Inc.
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
