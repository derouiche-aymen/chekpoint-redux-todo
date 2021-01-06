import React from 'react'
import { useDispatch } from 'react-redux'
import Edit from './Edit'
import {delett,done} from '../Const/Actions'

const Task =({el})=> {
    const dispatch=useDispatch()
    const handleDelete =()=>{
        dispatch(delett(el.id))
    }

    const handleComplete =()=>{
        dispatch(done(el.id))
    }
    return (
        <div className='todoes'>
            <div>
    {!el.isComplete ? <h3>{el.text}</h3> : <h3 style={{color:'red', textDecoration:'line-through'}}>{el.text}</h3> } </div>
            <div className='btnto'><button onClick={handleDelete}>Delete</button>
            <Edit el={el} />
            <button onClick={handleComplete}>Complete</button>
            </div>
        </div>

    )
}

export default Task