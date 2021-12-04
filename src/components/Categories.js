import React, { useEffect, useState } from 'react'
import { initCategoriesAction, removeAction } from '../reducers/categoryReducer'
import { useDispatch, useSelector } from 'react-redux'
import CategoryForm from './CategoryForm'
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
import CategItems from './CategItems'

const Categories = () => {

    const [showAddForm, setShowAddForm] = useState(false)
    const [catToShowItems, setCatToShowItems] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initCategoriesAction())
    }, [dispatch])

    const categories = useSelector(({ categories }) => {
        return categories
    })

    const currentUser = useSelector(({ currentUser }) => {
        return currentUser
    })

    const handleDeleteClick = object => {
        
        if (window.confirm(`Removing ${object.name}. Are you sure? `)) {
            
            dispatch(removeAction(currentUser.token, object.category_id, categories))
        }
    }

if (categories.length > 0) {
    return (
        <>
        {showAddForm && <CategoryForm setShowAddForm={setShowAddForm} />}
     
        {currentUser && !showAddForm && currentUser.admin === true && <Button style={ButtonStyle}
        onClick={() => setShowAddForm(true)}><AddIcon />Add new category</Button>}
            
            
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Description</TableCell>
                        </TableRow>
                </TableHead>
                <TableBody>
                    
            {categories.map(c =>
                    <TableRow key={c.category_id} onClick={setCatToShowItems(c.category_id)}>
                            <TableCell align="left">{c.name}</TableCell>
                            <TableCell align="left">{c.description}</TableCell>
                        
                        {currentUser && currentUser.admin === true &&
                        <TableCell align="left">
                            <Button style={{ height: '28px', width: '60px' }}
                                onClick={() => handleDeleteClick(c)}>Delete</Button>
                        </TableCell>
                        }
                    </TableRow>
                    
                        )
                    }
                </TableBody>
        </Table>
    </TableContainer>
</>)
}
else {
    return(<p>Loading..</p>)
    }
}

export default Categories