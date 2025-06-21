import { createContext } from "react";

export const ArrContext=createContext();
 
export const ArrProvider=({children})=>{
    const obj={
        name:'Thilak123',
        age:'19',
        branch:'ece'
    }
    return(
        <ArrContext.Provider value={obj}>
            {children}
        </ArrContext.Provider> 
    )
}