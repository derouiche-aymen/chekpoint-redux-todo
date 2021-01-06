const initialState= {t:[
    {text:'todo1',id:1,isComplete:false},
    {text:'todo2',id:2,isComplete:false}

],
t2:[]
};
const Reducer = (state=initialState ,action)=>{
    
    switch (action.type) {
        case 'ADD' : 
        return {
            ...state,t2:state.t,
            t:[...state.t,{text:action.payload,id:Math.random(),isComplete:false}]
            
        }

        case 'EDIT' : 
        return {
            ...state,t2:state.t,
            t:state.t.map(el=> el.id===action.payload.index ? {...el, text:action.payload.Newtext}: el ),
            
        }

        case 'DELETE' : 
        return {
            ...state,
            t:state.t.filter(el=> el.id!=action.payload ),
            t2:state.t
        }


        case 'DONE' : 
        return {
            ...state,
            t:state.t.map(el=> el.id==action.payload ? {...el, isComplete:!el.isComplete}: el ),
            t2:state.t
        }
        case 'SEECOMPLITE' :
        return{
                ...state,t2:state.t,
                t:state.t2.filter(el=> el.isComplete)
            }

            case 'SEENCOMPLITE' :
        return{
                ...state,t2:state.t,
                t:state.t2.filter(el=> !el.isComplete)
            }

            case 'SEEALL' :
                return{
                        ...state,t2:state.t,
                        t:state.t2.map()
                    }

        
        default : 
        return state
    }
}

export default Reducer;
