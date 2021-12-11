import React, {useEffect, useState} from 'react'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Button } from '@material-ui/core'
import AddIcon from '@mui/icons-material/Add'
import ButtonStyle from './StyledComponents/ButtonStyle'
import { initCartItemsAction } from '../reducers/cartReducer'

const Cart = () => {

    const dispatch = useDispatch()

    const [x, refresh] = useState(false)

    useEffect(() => {
        const cartJSON = window.localStorage.getItem('cart')
        const cart = JSON.parse(cartJSON)
        dispatch(initCartItemsAction(cart))
    }, [x])

    const cartItems = useSelector(({ cartItems }) => {
        return cartItems
    })

    const currentUser = useSelector(({ currentUser }) => {
        return currentUser
    })
/*
    const handleDeleteClick = object => {
        
        if (window.confirm(`Removing ${object.name} from cart. Are you sure? `)) {
            
            dispatch(removeAction(currentUser.token, object.category_id, categories))
        }
    }
    */

if (cartItems.length > 0) {
    return (
        <div id="cart">
        <h2>Cart</h2>
            <button onClick={() => refresh(!x)}>Refresh cart</button>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 80 }} size="small" aria-label="a dense table">
            <TableHead>
                        <TableRow>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Price</TableCell>
                        </TableRow>
                </TableHead>
                    <TableBody>
                        
                {cartItems.map(c =>
                        <TableRow key={c.item_id}>
                                <TableCell align="left">{c.name}</TableCell>
                                <TableCell align="left">{c.price}</TableCell>
                            
                            {currentUser && currentUser.admin === true &&
                            <TableCell align="left">
                                <Button style={{ height: '16px', width: '40px' }}
                                    >Remove</Button>
                            </TableCell>
                            }
                        </TableRow>
                    
                        
                            )
                        }
                    </TableBody>
            </Table>
        </TableContainer>
</div>)
}
else {
    return(
        <div id="cart">
                <h2>Cart</h2>
                <button onClick={() => refresh(!x)}>Refresh cart</button>
                <p>Cart is empty</p>
        </div>)
    }
}

export default Cart