import React from 'react'
import {
  Box, 
  Card, 
  CardContent, 
  Grid, 
  makeStyles, 
  Typography 
} from '@material-ui/core'

const useStyles = makeStyles({
  listHeader: {
    backgroundImage: 'linear-gradient(90deg, #EBE6E6, #C3BEC1)',
    marginBottom: 20
  }
})

const headerData = [
  'Name',
  'Gender', 
  'Birth', 
  'Country', 
  'Actions'
]

export const ListHeader = () => {
  const classes = useStyles()

  return (
    <Card className={classes.listHeader}>
      <CardContent>
        <Grid container>
          {headerData.map((data, index) => (
            <Grid item xs key={index}>
              <Typography align="center">
                <Box component="span" fontWeight={500}>
                  {data}
                </Box>
              </Typography>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  )
}
