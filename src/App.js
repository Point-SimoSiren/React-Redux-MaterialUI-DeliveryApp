import React, { useEffect } from 'react'
import Notification from './components/Notification'
import Menu from './components/Menu'
import { setCurrentUserAction, logoutAction } from './reducers/currentUserReducer'
import { notificationAction, emptyAction } from './reducers/notificationReducer'
import { positiveAction } from './reducers/positivityReducer'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Grid } from '@material-ui/core'
import styled from 'styled-components'
import { padding } from '@mui/system'

const Container = styled(Grid)`
    && {
        padding: 10px;
    }
`;

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const currentUser = JSON.parse(loggedUserJSON)
      dispatch(setCurrentUserAction(currentUser))
      //categoriesService.setToken(currentUser.token)
    }
  }, [dispatch])


  //--- LOGOUT-HANDLER--

  const handleLogOut = () => {
    localStorage.clear()
    dispatch(logoutAction())
    dispatch(positiveAction())
    dispatch(notificationAction('Logout was succesfull!'))

    setTimeout(() => {
      dispatch(emptyAction())
      window.location.reload()
    }, 3000)
  }

  const currentUser = useSelector(({ currentUser }) => {
    return currentUser
  })

  // APP.js renders to screen when not logged in

  if (!currentUser) {
    return (
      <>
        <Container>
          <h1>Delivery service</h1>
          <Notification />
          <Menu />
        </Container>
      </>
    )
  }

  // APP.js renders to screen when user is logged in

  else {
    return (
      <Container style={{marginRight: '7%', marginTop: '5%'}}>
         <h4 style={{marginLeft: '40%'}}>Logged in  {
          currentUser.admin === true && " as administrator "
        } with username {currentUser.name}

          <Button style={{ width: "150px", height: "30px", marginLeft: "100px" }}
            onClick={handleLogOut} >
            LOGOUT
          </Button></h4>
       
          <Notification />

        <Menu />
      </Container>
    )
  }
}

export default App
