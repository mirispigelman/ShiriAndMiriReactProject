import { createContext,useState } from "react";

export const ContextUser = createContext();
const ContextUserProvider = ({children}) => {
    const [user, setUser] = useState(localStorage.getItem("currentUser")||"");
    const resetUser = () => {localStorage.setItem("currentUser", ""); setUser("")};
    return (
        <ContextUser.Provider value={{user, setUser,resetUser}}>
            {children}
        </ContextUser.Provider>
    );
}
export default ContextUserProvider;