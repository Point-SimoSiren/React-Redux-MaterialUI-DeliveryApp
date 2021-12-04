import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import loginService from '../services/login'
import { notificationAction, emptyAction } from '../reducers/notificationReducer'
import { positiveAction, negativeAction } from '../reducers/positivityReducer'
import { setCurrentUserAction } from '../reducers/currentUserReducer'
import {
    Link
} from "react-router-dom"
import {
    Button,
    Input
} from '@material-ui/core'
import Textbox from './StyledComponents/Textbox'


const LoginForm = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const currentUser = useSelector(({ currentUser }) => {
        return currentUser
    })

    const handleLoginSubmit = async (event) => {
        event.preventDefault()
        try {
            const currentUser = await loginService.login({
                username, password,
            })
            window.localStorage.setItem(
                'loggedAppUser', JSON.stringify(currentUser)
            )

            //categoriesService.setToken(currentUser.token)
            dispatch(setCurrentUserAction(currentUser))
            setUsername('')
            setPassword('')
            dispatch(positiveAction())
            dispatch(notificationAction('Login was succesfull!'))
            setTimeout(() => {
                dispatch(emptyAction())
            }, 3000)

        } catch (exception) {
            dispatch(negativeAction())
            dispatch(notificationAction('Wrong credentials!'))
            setTimeout(() => {
                dispatch(emptyAction())
            }, 3000)
        }
    }

    if (!currentUser) {
        return (
            <>
                <h2>Login</h2>

                <form onSubmit={handleLoginSubmit}>
                    <div>
                        <Textbox mtop={20} width={300} placeholder="User Name"
                            value={username} autoComplete={username}
                            onChange={({ target }) => setUsername(target.value)}
                        />
                    </div>
                    <div>
                        <Textbox mtop={20} width={300}
                            type="password" placeholder="Password"
                            value={password} autoComplete={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                    </div>
                    <Button type="submit">login</Button>
                    <Button>
                        <Link to="/">cancel</Link>
                    </Button>
                </form>
            </>
        )
    }
    else {
        return null
    }
}

LoginForm.propTypes = {
    handleSubmit: PropTypes.func,
    handleUsernameChange: PropTypes.func,
    handlePasswordChange: PropTypes.func,
    username: PropTypes.string,
    password: PropTypes.string
}

export default LoginForm