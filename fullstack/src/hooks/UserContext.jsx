import { createContext } from "react";

export const UserContext=createContext();
 
export const UserProvider=({children})=>{
    const name='Thilak'
    return(
        <UserContext.Provider value={name}>
            {children}
        </UserContext.Provider> 
    )
}