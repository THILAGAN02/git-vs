import { useReducer } from "react"

let initialvalue=0
let initialreact={like:0,dislike:0}

const counter=(state,action)=>{
        switch(action.type){
            case 'INCREMENT':
                return state+1
            case "DECREMENT":
                return state-1 
            case 'RESET':
                return 0
                default:
                    return state
        }
}
const likeCounter=(state,action)=>{
    switch(action.type){
        case 'LIKE':
            return {...state, like: state.like+1}
        case 'DISLIKE':
            return {...state, dislike: state.dislike+1}
            default:
                return state
    }
}
const Reducer = () =>{
     const [count,dispatch]=useReducer(counter,initialvalue)
    const [likecount,dispatch1]=useReducer(likeCounter,initialreact)
    
    return(
        <div>
            <h1>Like:{likecount.like} <br />
            Dislike:{likecount.dislike}</h1>
            <button onClick={()=>dispatch1({type:"LIKE"})}>👍</button>
            <button onClick={()=>dispatch1({type:"DISLIKE"})}>👎</button>
       
            <h1>Count:{count}</h1> <br />
        <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
        <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
        </div>
    )
}
export default Reducer