import {useState, useContext} from 'react' 
import '../App.css'
import fetchData from '../service/FetchData.js'
import ContextUserProvider, { ContextUser } from './ContextUser'
import {Link, Navigate, Routes,Route, Outlet} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Login=()=>{
    const navigate = useNavigate();
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const {setUser}=useContext(ContextUser)
    const HandleForm = async (event) => {
        event.preventDefault();
        ////need to find in the data base if the user exists and check if the password matches
        try{
            console.log(`users?username=${userName}&website=${password}'`);
            const myUser = await fetchData(`users?username=${userName}&website=${password}`); 
            console.log(myUser);
            if (!myUser[0]) {
                 alert("User not found");
                 return;
            }
            else{
                setUser(myUser[0]);
                localStorage.setItem("currentUser", JSON.stringify(myUser[0].id));
                console.log(localStorage.getItem("currentUser"));
                navigate(`/users/${myUser[0].id}/home`);
            }
        }
         catch(error){
                console.error('Error fetching:', error);
                alert('Error fetching data');
                return;
         }
        //go to your home page
        
    }
    return (
        <>
             Bret hildegard.org
            <h1>Log in</h1>
            <h3>welcome back!</h3>

            <form onSubmit={HandleForm}>
            <input
            type="text" 
            value={userName}
            placeholder='Enter your userName:'
            onChange={(e) => setUserName(e.target.value)}
            required
            />
            <br></br>
            <input
                type="text" 
                value={password}
                placeholder='Enter your password:'
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <br></br>
            <button type='submit'>Submit</button>
            </form>
            {/* <h4> <Link to="/SignUp">new here? go to</Link></h4> */}
           
        <button onClick={()=>navigate("/signUp")} style={{ color: "blue", textDecoration: "none", background: "none", border: "none", cursor: "pointer" }}>
        new here? go to signUp
        </button>
        </>
    )
}
export default Login