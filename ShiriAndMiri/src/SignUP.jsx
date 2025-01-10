import { useState } from "react";
import './App.css';
import {Link, Navigate, Routes,Route} from 'react-router-dom';
import FetchData from "./FetchData";
const SignUp=()=> {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [verifyPassword, setVerifyPassword] = useState('')


    const HandleForm = async (event) => {
        event.preventDefault();
        if (userName===""||password===""|| verifyPassword===""){
            alert("All details must be complete");
        }
        if(password!==verifyPassword){
            alert("the passwords are not the same");
        }
        ////need to find in the data base if the user exists 
        console.log("getData")
            try{
                const user = await FetchData(`users?username=${userName}||website=${password}'`);
                if (user) {
                    alert("userNmae or password is not avilable");
                    return;
                }
                else{
                    localStorage.setItem("currentUser", JSON.stringify(user.name));
                    console.log(localStorage.getItem("currentUser"));
                    //go to your signUp-part2 page

                }
            }catch(e){
                console.error('Error fetching:', error);
                alert('Error fetching data');
            }
    }
    return (
        <>  
            <h1>Sign Up</h1>
            <form onSubmit={HandleForm}>
            <input
            type="text" 
            value={userNam}
            placeholder='Enter your userNam:'
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
            <button  type='submit'>Submit</button>
            </form>
            <h4>already have an account? </h4>
         { /*  <Link path="/login">Login</Link>*/}
        </>
    );
}
export default SignUp