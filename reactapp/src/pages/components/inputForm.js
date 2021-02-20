import {useState} from 'react'


const inputForm = (initialValue) => {

    const [ state, setState] = useState(initialValue)

 
    const changeInput = (event)=> {
        setState ( { ...state, [event.target.name] : event.target.value })
    }


    
    return {
        state,
        reset : ()=> setState(initialValue),
        bind : {
            onChange : changeInput
        }
    }
    
}


export default inputForm