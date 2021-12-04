import React from 'react'
import '../index.css'
import { useSelector } from 'react-redux'
import { Alert } from '@material-ui/lab'

const Notification = () => {

    const notification = useSelector(({ notification }) => {
        return notification
    })

    const positivity = useSelector(({ positivity }) => {
        return positivity
    })


   if (positivity === 'positive' && notification.length > 0) {
        return (
            <Alert variant="outlined" severity="success">
                {notification}
            </Alert>
        )
    }
    else if (positivity === 'negative' && notification.length > 0) {
        return (
            <Alert variant="outlined" severity="error">
                {notification}
            </Alert>
        )
    }
    else {
        return(<></>)
    }
}

export default Notification

