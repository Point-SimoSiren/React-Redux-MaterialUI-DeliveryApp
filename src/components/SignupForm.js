import React, { useState } from 'react'
import { createAction } from '../reducers/userReducer'
import { positiveAction, negativeAction } from '../reducers/positivityReducer'
import { notificationAction, emptyAction } from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'
import { Button } from '@material-ui/core'
import Textbox from './StyledComponents/Textbox'
import {
    Link
} from "react-router-dom"

const SignupForm = () => {
    const dispatch = useDispatch()

    const addUser = (event) => {
        event.preventDefault()

        if (newPassword !== repeatPassword) {
            dispatch(negativeAction())
            dispatch(notificationAction("passwords doent match"))
            setTimeout(() => {
                dispatch(emptyAction())
            }, 6000)
            setNewPassword('')
            setRepeatPassword('')
            setPasswordAlert('passwords doent match')
            return null
        }

        let newUser = {
            username: newUsername,
            password: newPassword,
            name: newName,
            address: newAddress,
            phone: newPhone,
            email: newEmail,
            admin: false,
        }
        try {

            dispatch(createAction(newUser))
            dispatch(positiveAction())
            dispatch(notificationAction(`Welcome to use your new ${newUsername} account`))
            setTimeout(() => {
                dispatch(notificationAction('You can now log in and place your first order.'))
            }, 4000)
            setTimeout(() => {
                dispatch(emptyAction())
            }, 4000)
        }
        catch {
            dispatch(negativeAction())
            dispatch(notificationAction('error happened'))
            setTimeout(() => {
                dispatch(emptyAction())
            }, 4000)
        }
        finally {
            setNewUsername('')
            setNewPassword('')
            setRepeatPassword('')
            setNewName('')
            setNewAddress('')
            setNewPhone('')
            setNewEmail('')
        }
    }

    const [newUsername, setNewUsername] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [newName, setNewName] = useState('')
    const [newAddress, setNewAddress] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [passwordAlert, setPasswordAlert] = useState('')



    return (
        <form onSubmit={addUser}>
            <div>
                <Textbox mtop={20} width={300} type="text" value={newUsername} placeholder="User Name"
                    onChange={({ target }) => setNewUsername(target.value)} />
            </div>

            <div>
                <Textbox mtop={20} width={300} type="password" value={newPassword} placeholder="Password"
                    onChange={({ target }) => setNewPassword(target.value)} />
            </div>

            <div>
                <Textbox mtop={20} width={300} type="password" value={repeatPassword} placeholder="Repeat Password"
                    onChange={({ target }) => setRepeatPassword(target.value)} />
                <h5 style={{ color: 'red' }}>{passwordAlert}</h5>
            </div>
            <div>
                <Textbox mtop={20} width={300} type="text" value={newName}
                    placeholder="Full Name"
                    onChange={({ target }) => setNewName(target.value)} />
            </div>
            <div>
                <Textbox mtop={20} width={300} type="text" value={newAddress} placeholder="Address"
                    onChange={({ target }) => setNewAddress(target.value)} />
            </div>
            <div>
                <Textbox mtop={20} width={300} placeholder="Phone Number" type="text" value={newPhone}
                    onChange={({ target }) => setNewPhone(target.value)} />
            </div>
            <div>
                <Textbox mtop={20} width={300} placeholder="E-mail Address" type="email" value={newEmail}
                    onChange={({ target }) => setNewEmail(target.value)} />
            </div>

            <div>
                <Button type="submit">create account</Button>
                <Button>
                    <Link to="/">cancel</Link>
                </Button>
            </div>
        </form>
    )
}

export default SignupForm