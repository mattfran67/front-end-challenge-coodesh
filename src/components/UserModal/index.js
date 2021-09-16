import React, { useContext } from 'react'
import { ModalContext } from 'context/ModalContext'
import {
  Avatar, 
  Box,
  Button,
  Dialog, 
  DialogActions, 
  DialogContent, 
  makeStyles, 
  Typography 
} from '@material-ui/core'

const useStyles = makeStyles({
  avatar: {
    width: 120, 
    height: 120, 
    margin: 'auto',
    marginBottom: 10
  }
})

export const UserModal = () => {
  const { open, data, openModal } = useContext(ModalContext)
  const classes = useStyles()

  if (data) {
    const modalData = {
      Name: `${data.name.first} ${data.name.last}`,
      Email: data.email,
      Gender: data.gender,
      Birth: new Date(data.dob.date).toLocaleDateString(),
      Phone: data.phone,
      Country: data.location.country,
      Adress: data.location.street.name
    }

    return (
      <Dialog open={open} onClose={openModal}>
        <DialogContent>
          <Avatar
            src={data.picture.large} 
            alt="user avatar"
            className={classes.avatar}
          />
          {Object.keys(modalData).map((value, index) => (
            <Typography gutterBottom key={index}>
              <Box
                component="span" 
                fontWeight={600} 
                fontSize={18}
                display="inline-block"
                width="7ch"
              >
                {value}:
              </Box>
              <Box component="span" fontSize={17}>
                {' ' + modalData[value]}
              </Box>
            </Typography>
          ))}
        </DialogContent>
        <DialogActions>
          <Button
            color="secondary"
            variant="outlined"
            onClick={openModal}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    )
  }

  return null
}
