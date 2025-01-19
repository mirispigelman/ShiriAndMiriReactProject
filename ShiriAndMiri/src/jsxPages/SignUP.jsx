import { useState } from "react";
import '../App.css';
import {Link, Navigate, Routes,Route, Outlet} from 'react-router-dom';
import fetchData from "../service/FetchData.js";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { use } from "react";
const SignUp=()=> {
    const navigate = useNavigate();
     const [userName, setUserName] = useState('')
     const [password, setPassword] = useState('')
    const [verifyPassword, setVerifyPassword] = useState('')
    
    const HandleForm = async (event) => {
        event.preventDefault();
        if (userName===""||password===""|| verifyPassword===""){
            alert("All details must be complete");
            return;
        }
        if(password!==verifyPassword){
            alert("the passwords are not the same");
            return;
        }
        ////need to find in the data base if the user exists 
        // console.log("getData")
            try{
                console.log(userName);
                const user = await fetchData(`users?username=${userName}`);
                // console.log("לללל"+user)
                if (user[0]) {
                    alert("userNmae or password is not avilable");
                    return;
                }
                else{
                    //go to your signUp-part2 page
                     navigate("/signUpPart2",{state:{userName,password}});
                }
            }catch(e){
                console.error('Error fetching:', error);
                alert(`{Error fetching data ${e}}`);
            }
    }
    return (
        <>  
            <h1>Sign Up</h1>
            <form onSubmit={HandleForm}>
            <input
            type="text" 
            value={userName}
            placeholder='Enter your userName:'
            onChange={(e) => setUserName(e.target.value)}
            />
            <br></br>
            <input
                type="text" 
                value={password}
                placeholder='Enter your password:'
                onChange={(e) => setPassword(e.target.value)}
            />
            <br></br>
            <input
                type="text" 
                value={verifyPassword}
                placeholder='verify your password:'
                onChange={(e) => setVerifyPassword(e.target.value)}
            />
            <br></br>
            <button  onClick={HandleForm} type='submit'>press to finish the process</button>

            </form>
            
            <p>
        
        <button onClick={()=>{navigate("/login")}} style={{ color: "blue", textDecoration: "underline", background: "none", border: "none", cursor: "pointer" }}>
        Already have an account? go to login
        </button>
         </p>
        </>
    );
}
export default SignUp