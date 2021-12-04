import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createAction } from '../reducers/categoryReducer'
import { Button } from '@material-ui/core'
import Textbox from './StyledComponents/Textbox'
import Formbox from './StyledComponents/Formbox'
import ButtonStyle from './StyledComponents/ButtonStyle'

const CategoryForm = ({setShowAddForm}) => {

    const [newName, setNewName] = useState('')
    const [newDescription, setNewDescription] = useState('')

    const dispatch = useDispatch()

    const currentUser = useSelector(({ currentUser }) => {
        return currentUser
    })

    const addCategory = (event) => {
        event.preventDefault()
        let newCategory = {
            name: newName,
            description: newDescription
        }
        
        dispatch(createAction(currentUser.token, newCategory))
        setNewName('')
        setNewDescription('')
        
    }


    return (
        <Formbox mtop={10} width={120}>
        <form onSubmit={addCategory}>
            <div>
                
                <Textbox mtop={20} width={170} type="text" placeholder="Type name of the new category" value={newName} name="Name"
                    onChange={({ target }) => setNewName(target.value)} />
            </div>
            <div>
            
                <Textbox mtop={20} width={170} type="link" placeholder="Give description" value={newDescription} name="Description"
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
export default CategoryForm