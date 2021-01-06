export const add=(task)=>{
    return {
        type:'ADD',
        payload:task
    }
}

export const done=(payload)=>{
    return {
        type: 'DONE',
        payload
    }
}

export const edit=(payload)=>{
    return {
        type: 'EDIT',
        payload
    }
}

export const delett=(payload)=>{
    return {
        type: 'DELETE',
        payload
    }
}

export const seeComplite =()=>{
    return{
        type: 'SEECOMPLITE' ,

    }
}

export const seenComplite =()=>{
    return{
        type: 'SEENCOMPLITE' ,

    }
}

export const seeall =()=>{
    return{
        type: 'SEEALL' ,

    }
}


