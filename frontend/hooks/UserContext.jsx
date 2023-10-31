import { Children, createContext, useContext, useReducer } from "react";

const UserContext = createContext(null)



const initialState = (action,state) =>{
    switch(action.type){
        case 'Login':
            return {state: action.payload}
            case 'logout': 
            return {state: null}
        }
    }
    
export const [state,dispatch] = useReducer(,state)
    
export const User = ({Children}) =>{
    return (
        <UserContext.Provider value={state}>
            {Children}
        </UserContext.Provider>
    )
}


