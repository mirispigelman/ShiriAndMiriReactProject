import { createContext,useState } from "react";
import React from "react";
import fetchData from "../service/FetchData";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"


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


