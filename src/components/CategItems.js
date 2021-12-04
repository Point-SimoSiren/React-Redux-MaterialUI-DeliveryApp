import React, { useEffect, useState } from 'react'
import { initItemsAction } from '../reducers/itemReducer'
import { useDispatch, useSelector } from 'react-redux'
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

const CategItems = ({category}) => {

    const dispatch = useDispatch()

    const catItems = useSelector(({ items }) => {
        return items.filter(i => i.category_id === category.category_id)
    })


    if (!catItems) {
        return (<h3>Loading category items...</h3>)
    }
    else {

        return (
            <>
        <h3>Products in {category.name} category</h3>
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
                        catItems.map(ci => (
                        <TableRow key={ci.item_id}>
                            <TableCell><Button style={ButtonStyle}>Add to cart</Button></TableCell>
                           <TableCell>{ci.name}</TableCell>
                           <TableCell>{ci.package}</TableCell>
                           <TableCell>{ci.price}</TableCell>
                           <TableCell>{ci.manufacturer}</TableCell>
                           <TableCell>{ci.description}</TableCell>
                       </TableRow>
                        )
                        )
                        }
                  </TableBody>
                </Table>
            </TableContainer>
            </>
      )
    }
}
export default CategItems