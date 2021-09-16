import React, { useContext } from "react"

import { FilterBar } from "components/FilterBar"
import { Observer } from "components/Observer"
import { UserCard } from "components/UserCard"
import { ListHeader } from "components/ListHeader"
import { NavBar } from "components/NavBar"

import { UsersContext } from "context/UsersContext"
import { ModalProvider } from "context/ModalContext"

import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core"

const styles = makeStyles({
  errorCard: {
    backgroundColor: "#F8D7DA",
    color: "#6A1A21",
    marginTop: 20,
  },
})

const App = () => {
  const { error, data, loading, page } = useContext(UsersContext)
  const classes = styles()

  const userList = data.map((user, index) => (
    <UserCard key={index} user={user} />
  ))

  const loadingEl = (
    <Grid 
      alignItems="center" 
      container 
      justifyContent="center"
    >
      <Grid item>
        <Typography variant="h5" component="p">
          Loading...
        </Typography>
      </Grid>
      <Grid item>
        <CircularProgress />
      </Grid>
    </Grid>
  )

  if (error) {
    return (
      <Container>
        <Card className={classes.errorCard}>
          <CardContent>
            <Typography align="center" variant="h5" component="p">
              Keep Calm an error has occurred!
            </Typography>
          </CardContent>
        </Card>
      </Container>
    )
  }

  return (
    <>
      <NavBar />
      <Container>
        <Typography 
          align="center" 
          variant="h1" 
        >
          <Box
            letterSpacing={10}
            margin="50px 0" 
            fontStyle="italic" 
            color="#555"
          >
            Users List
          </Box>
        </Typography>
        <Box marginBottom={3}>
          <Typography align="center">
            <Box component="span" fontSize={18}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Box>
          </Typography>
        </Box>
        <FilterBar />
        <ModalProvider>
          {loading && page.current === 1 ? loadingEl : userList}
          {loading && page.current > 1 && loadingEl}
          {userList.length > 1 && !loading && <Observer />}
        </ModalProvider>
      </Container>
    </>
  );
};

export default App
