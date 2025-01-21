import { createContext,useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import fetchData from "../service/FetchData";

export const ContextUser = createContext();
const ContextUserProvider = ({children}) => {

    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const resetUser = () => {localStorage.setItem("currentUser", ""); setUser({})};

    useEffect(() => {
        const idExist = JSON.parse(localStorage.getItem('currentUser'));
        if ( idExist ) {
          fetchUserDetails(idExist);
        }
        else{
          navigate('/login');
        }
      },[]);
        
    const fetchUserDetails = async (idExist) => {
        try {
            const DatailsUser = await fetchData(`users?id=${idExist}`);
            setUser(DatailsUser[0]);
        } catch (error) {
            navigate('/login');
            alert('Error fetching user details:', error);
        }
    };
    return (
        <ContextUser.Provider value={{user, setUser,resetUser}}>
            {children}
        </ContextUser.Provider>
    );
}
export default ContextUserProvider;


