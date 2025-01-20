import { createContext,useState } from "react";
import React from "react";

export const ContextUser = createContext();
const ContextUserProvider = ({children}) => {

    const [user, setUser] = useState({});
    const resetUser = () => {localStorage.setItem("currentUser", ""); setUser({})};
     
    return (
        <ContextUser.Provider value={{user, setUser,resetUser}}>
            {children}
        </ContextUser.Provider>
    );
}
export default ContextUserProvider;


