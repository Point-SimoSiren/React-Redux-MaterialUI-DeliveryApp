import React from 'react'
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

const Cart = () => {

    const dispatch = useDispatch()

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
    return(<p>Cart is empty</p>)
    }
}

export default Cart