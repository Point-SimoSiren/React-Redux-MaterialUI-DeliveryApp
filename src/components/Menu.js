import React from 'react'
import Categories from './Categories'
import Items from './Items'
import { useSelector } from 'react-redux'
import '../index.css'
import Users from './Users'
import Homepage from './Homepage'
import styled from 'styled-components';
import {
    Switch,
    Route,
    Link
} from "react-router-dom"

import { AppBar, Toolbar, Button } from '@material-ui/core'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const StyledAppBar = styled(AppBar)`
    && {
        background-color: #124a09;
    }
`

const StyledToolBar = styled(Toolbar)`
    && {
        justify-content: flex-left;
    }
`

const Menu = () => {

    const smallDevice = useMediaQuery('(max-width:500px)')
    const midDevice = useMediaQuery('(max-width:900px)')

    let LStyle
    let loginStyle
    let signupStyle

    if (smallDevice === true) {

        LStyle = {
            textDecoration: 'none',
            color: '#ccf0cc',
            fontSize: '14px',
            marginRight: '1%',
            fontFamily: 'Roboto'
        }

        signupStyle = {
            textDecoration: 'none',
            color: '#fff',
            fontSize: '14px',
            marginLeft: '1%',
            fontFamily: 'Roboto'
        }

        loginStyle = {
            textDecoration: 'none',
            color: '#fff',
            fontSize: '14px',
            marginLeft: '1%',
            fontFamily: 'Roboto'
        }
    }

    else if (midDevice === true) {
        LStyle = {
            textDecoration: 'none',
            color: '#ccf0cc',
            fontSize: '18px',
            marginRight: '1%',
            fontFamily: 'Roboto'
        }

        signupStyle = {
            textDecoration: 'none',
            color: '#fff',
            fontSize: '18px',
            marginLeft: '20%',
            fontFamily: 'Roboto'
        }

        loginStyle = {
            textDecoration: 'none',
            color: '#fff',
            fontSize: '18px',
            marginLeft: '1%',
            fontFamily: 'Roboto'
        }

    }
    else {
        LStyle = {
            textDecoration: 'none',
            color: '#ccf0cc',
            fontSize: '22px',
            marginRight: '1%',
            fontFamily: 'Roboto'
        }

        signupStyle = {
            textDecoration: 'none',
            color: '#fff',
            fontSize: '22px',
            marginLeft: '50%',
            fontFamily: 'Roboto'
        }

        loginStyle = {
            textDecoration: 'none',
            color: '#fff',
            fontSize: '22px',
            marginLeft: '1%',
            fontFamily: 'Roboto'
        }
    }

    const categories = useSelector(({ categories }) => {
        return categories
    })

    const items = useSelector(({ items }) => {
        return items
    })

    const currentUser = useSelector(({ currentUser }) => {
        return currentUser
    })


    return (
        <div>

            <StyledAppBar>
                <StyledToolBar>

                    <Link style={LStyle} to="/categories">
                        Categories
                    </Link>

                    <Link style={LStyle} to="/products">
                        Products
                    </Link>

                    <a style={LStyle} href="http://localhost:3100">
                        Customer service
                    </a>

                    {!currentUser &&
                        <>
                            <Link style={signupStyle} to="/signup"> <Button style={{ width: '16px', height: '30px' }} color="silver" variant="contained">Signup</Button></Link>

                            <Link style={loginStyle} to="/login"> <Button style={{ width: '16px', height: '30px' }} color="primary" variant="contained">Login</Button></Link>
                        </>
                    }

                    {currentUser &&
                        <Link style={LStyle} to="/my-orders">My-orders</Link>
                    }

                    {currentUser &&
                        <Link style={LStyle} to="/cart">Cart</Link>
                    }

                    {currentUser && currentUser.admin === true &&
                        <Link style={LStyle} to="/users">User Management</Link>
                    }
                </StyledToolBar>
            </StyledAppBar>


            <Switch>
           
                <Route path="/signup">
                    <SignupForm />
                </Route>
                <Route path="/login">
                    <LoginForm />
                </Route>
                <Route path="/categories">
                    <Categories categories={categories} />
                </Route>
                <Route path="/products">
                    <Items items={items} />
                </Route>
                <Route path="/orders">
                    <Categories categories={categories} />
                </Route>
                <Route path="/cart">
                    <Categories categories={categories} />
                </Route>
                {currentUser && currentUser.admin === true &&
                    <Route path="/users">
                        <Users />
                    </Route>}
                    <Route path="/">
                    <Homepage />
                </Route>

            </Switch>

        </div>
    )
}

export default Menu