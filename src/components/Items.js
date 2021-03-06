import React, { useEffect, useState } from 'react'
import { initItemsAction, removeAction } from '../reducers/itemReducer'
import { addCartAction } from '../reducers/cartReducer'
import { useDispatch, useSelector } from 'react-redux'
import ItemForm from './ItemForm'
import { Button } from '@material-ui/core'
import AddIcon from '@mui/icons-material/Add'
import ButtonStyle from './StyledComponents/ButtonStyle'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Cart from './Cart'

const Items = () => {

    const [showAddForm, setShowAddForm] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initItemsAction())
    }, [dispatch])

    const items = useSelector(({ items }) => {
        return items
    })

    const currentUser = useSelector(({ currentUser }) => {
        return currentUser
    })

    const showCart = useSelector(({ showCart }) => {
        return showCart
    })


    const handleDeleteClick = (object) => {
        if (window.confirm(`Removing ${object.name}. Are you sure? `)) {
            dispatch(removeAction(currentUser.token, object.item_id, items))
        }
    }

    const addToCart = object => {
        if (window.confirm(`Adding ${object.name} to cart. Are you sure? `)) {
            dispatch(addCartAction(object))
        }
    }

    if (!items) {
        return (<h3>Loading items...</h3>)
    }
    else {

        return (
            <>
                 {showCart && <Cart />}
             <h2>Products</h2>

            {showAddForm && <ItemForm setShowAddForm={setShowAddForm} />}
       
             {currentUser && currentUser.admin === true &&  <Button style={ButtonStyle}
        onClick={() => setShowAddForm(true)}><AddIcon />Add new item</Button>}

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 400 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                    <TableCell align="left"></TableCell>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Package</TableCell>
                        <TableCell align="left">Price</TableCell>
                        <TableCell align="left">Manufact.</TableCell>
                        <TableCell align="left">Desc</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        items.map(i =>
                            <TableRow key={i.item_id}>
                                 <TableCell><Button style={ButtonStyle} onClick={() => addToCart(i)}>Add to cart</Button></TableCell>
                                <TableCell>{i.name}</TableCell>
                                <TableCell>{i.package}</TableCell>
                                <TableCell>{i.price}</TableCell>
                                <TableCell>{i.manufacturer}</TableCell>
                                <TableCell>{i.description}</TableCell>
                                {currentUser && currentUser.admin === true &&
                                    <Button style={{ height: '30px', width: '70px' }}
                                        onClick={() => handleDeleteClick(i)}>Delete</Button>
                                }
                            </TableRow>
                        )
                    }
                  </TableBody>
                </Table>
            </TableContainer>
            </>
        )
    }
}
export default Items
