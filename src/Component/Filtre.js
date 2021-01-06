import React from 'react'
import {useDispatch } from 'react-redux'
import {seeComplite,seenComplite,seeall} from '../Const/Actions'

const Filtre =()=>{
    const dispatch = useDispatch();
    const Complite =()=>{
        dispatch(seeComplite())
    }
    const nComplite =()=>{
        dispatch(seenComplite())
    }
    const see=()=>{
        dispatch(seeall())
    }
    return(
        <div className='filtre'>
            <button onclick={see}>SEE ALL</button>
            <button onClick={Complite}>SEE Complite</button>
            <button onClick={nComplite}>SEE not Complite</button>
        </div>
    )
}
export default Filtre