import React from 'react'

const UserDetails = ({ user }) => {
    return (
        <div style={{ backgroundColor: 'silver', marginLeft: '5%' }}>
            
            <h2>{user.name} {user.admin === true ? " : Staff member" : " : Customer"}</h2>
            <h4>{user.address}</h4>
            <h4>{user.phone}</h4>
            <h4>{user.email}</h4>
            <h4>Username: {user.username}</h4>
        </div>
    )
}

export default UserDetails
