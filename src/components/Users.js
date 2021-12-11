import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initUsersAction } from '../reducers/userReducer'
import usersService from '../services/users'
import UserDetails from './UserDetails'
import { Button } from '@material-ui/core'
import ButtonStyle from './StyledComponents/ButtonStyle'
import Cart from './Cart'

const Users = () => {

    const [showDetailsId, setShowDetailsId] = useState(0)

    const dispatch = useDispatch()

    const currentUser = useSelector(({ currentUser }) => {
        return currentUser
    })

    useEffect(() => {
        console.log(currentUser.token)
        usersService.setToken(currentUser.token)
        dispatch(initUsersAction())
    }, [dispatch])

    const users = useSelector(({ users }) => {
        return users
    })

    return (
        <>
            {showDetailsId === 0 && <h2>Click user to see details</h2>}
            {showDetailsId !== 0 && <Button style={ButtonStyle}
            onClick={() => setShowDetailsId(0)}>Hide details</Button>}
            {
                users.map(user =>
                    <div key={user.user_id}>
                        <h4 onClick={() => setShowDetailsId(user.user_id)}>
                            {showDetailsId !== user.user_id && user.name}
                            {showDetailsId === user.user_id && <UserDetails user={user} />}
                        </h4>
                    </div>
                )
            }
        </>
    )
}
export default Users