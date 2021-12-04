import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createAction } from '../reducers/itemReducer'
import { Button } from '@material-ui/core'
import Textbox from './StyledComponents/Textbox'
import Formbox from './StyledComponents/Formbox'
import ButtonStyle from './StyledComponents/ButtonStyle'

const ItemForm = ({setShowAddForm}) => {

    const [newName, setNewName] = useState('')
    const [newPackage, setNewPackage] = useState('')
    const [newManufacturer, setNewManufacturer] = useState('')
    const [newPrice, setNewPrice] = useState('')
    const [newCategoryId, setNewCategoryId] = useState('')
    const [newDescription, setNewDescription] = useState('')

    const dispatch = useDispatch()

    const currentUser = useSelector(({ currentUser }) => {
        return currentUser
    })

    const addCategory = (event) => {
        event.preventDefault()
        let newItem = {
            name: newName,
            description: newDescription,
            manufacturer: newManufacturer,
            package: newPackage,
            price: parseFloat(newPrice),
            active: true,
            category_id: newCategoryId,
            imagelink: 'abcs'
        }
   
        dispatch(createAction(currentUser.token, newItem))
    }

    
    return (
        <Formbox mtop={10} width={120}>
        <form onSubmit={addCategory}>
            <div>
            <Textbox mtop={20} width={170} type="text" placeholder="name" value={newName}
                    onChange={({ target }) => setNewName(target.value)} />
            </div>
            <div>
            <Textbox mtop={20} width={170} type="text" placeholder="package" value={newPackage}
                    onChange={({ target }) => setNewPackage(target.value)} />
            </div>
            <div>
            <Textbox mtop={20} width={170} type="text" placeholder="price" value={newPrice}
                    onChange={({ target }) => setNewPrice(target.value)} />
            </div>
            <div>
            <Textbox mtop={20} width={170} type="text" placeholder="manufacturer" value={newManufacturer}
                    onChange={({ target }) => setNewManufacturer(target.value)} />
            </div>
            <div>
            <Textbox mtop={20} width={170} type="text" placeholder="category no" value={newCategoryId}
                    onChange={({ target }) => setNewCategoryId(target.value)} />
            </div>
            <div>
            <Textbox mtop={20} width={170} type="link" placeholder="description" value={newDescription}
                    onChange={({ target }) => setNewDescription(target.value)} />
            </div>
            <div>
                <Button style={ButtonStyle} type="submit">save</Button>
                <Button style={ButtonStyle} onClick={() => setShowAddForm(false)}>cancel</Button>
            </div>
        </form>
        </Formbox>
    )
    }
export default ItemForm