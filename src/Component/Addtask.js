import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {add} from '../Const/Actions'


const Addtask =()=> {
    const [text, setText] = useState('')
    const dispatch=useDispatch()
const handlAdd =()=> {
    dispatch(add(text))
    setText('')
}


    return (
        <div>
            <input type='text' placeholder='add task' onChange={(e)=> setText(e.target.value)} value={text}  />
            <button onClick={handlAdd} >Add</button>
        </div>
    )
}


export default Addtask
