import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Button } from '@material-ui/core'
//import AddIcon from '@mui/icons-material/Add'
import ButtonStyle from './StyledComponents/ButtonStyle'
import { initAction } from '../reducers/myOrdersReducer'
import Cart from './Cart'
import './MyOrders.css'


const MyOrders = () => {

    const dispatch = useDispatch()

    const currentUser = JSON.parse(localStorage.getItem('loggedAppUser'))

    useEffect(() => {
        dispatch(initAction(currentUser.user_id))
    }, [dispatch])


    const myOrders = useSelector(({ myOrders }) => {
        return myOrders
    })

    const showCart = useSelector(({ showCart }) => {
        return showCart
    })

    const showDetails = (orderId) => {
        alert("Show details clicked for Order Id: " + orderId)
    }

    return(
        <>
        {showCart && <Cart />}

        <h2>My Orders</h2>

        <TableContainer component={Paper}>
                <Table sx={{ minWidth: 400 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left">Order no</TableCell>
                            <TableCell align="left">Total price</TableCell>
                            <TableCell align="left">Delivered</TableCell>
                            <TableCell align="left">Paid</TableCell>
                            <TableCell align="left">Payment</TableCell>
                            <TableCell align="left">Notes</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        myOrders && myOrders.map(mo =>
                            <TableRow key={mo.order_id}>
                                 <TableCell><Button style={ButtonStyle} onClick={() => showDetails(mo.order_id)}>Show details</Button></TableCell>
                                <TableCell>{mo.order_id}</TableCell>
                                <TableCell>{mo.totalPrice}</TableCell>
                                <TableCell>{mo.delivered ? "Yes" : "No"}</TableCell>
                                <TableCell>{mo.paid ? "Yes" : "No"}</TableCell>
                                <TableCell>{mo.paid ? "" : <button className="btn-pay">Pay Now</button> }</TableCell>
                                <TableCell>{mo.notes}</TableCell>
                            </TableRow>
                        )
                    }
                  </TableBody>
                </Table>
            </TableContainer>
    </>
    )
}

export default MyOrders
