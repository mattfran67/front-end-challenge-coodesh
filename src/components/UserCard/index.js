import React, { useContext } from "react"
import { ModalContext } from "context/ModalContext"
import {
  Box,
  Button, 
  Card, 
  CardContent, 
  Grid, 
  makeStyles, 
  Typography 
} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    marginBottom: 20,
    paddingTop: 20,
    paddingBottom: 20
  },
})

export const UserCard = ({ user }) => {
  const classes = useStyles()
  const { openModal, passData } = useContext(ModalContext)

  const handleClick = userData => {
    passData(userData)
    openModal()
  }

  const userObject = {
    name: `${user.name.first} ${user.name.last}`,
    gender: user.gender,
    dob: new Date(user.dob.date).toLocaleDateString(),
    country: user.location.country
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container alignItems="center">
          {Object.values(userObject).map((data, index) => (
            <Grid item md xs={12} key={index}>
              <Typography align="center">
                <Box fontSize={20} component="span">
                  {data}
                </Box>
              </Typography>
            </Grid>
          ))}
          <Grid item md xs={12} style={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleClick(user)}
            >
              View
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}