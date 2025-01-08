import { useState } from "react";
import './App.css'
export default function SignUp() {
    const [userNam, setUserNam] = useState('')
    const [password, setPassword] = useState('')
    const [verifyPassword, setVerifyPassword] = useState('')


    function errorList(){
        let errorList=[]

        if (userNam===""||password===""|| verifyPassword===""){
            errorList.push("All details must be complete");
        }
        ////need to find in the data base if the user exists 
        
        if(password!==verifyPassword){
            errorList.push("the passwords are not the same");
        }
        return errorList;
    }
    const HandleForm = (event) => {
        event.preventDefault();
        let errLis=errorList();
        if(errLis.length>0){
           alert(errLis.join(","));
           console.log({userNam,password});
        }
        else{
            localStorage.setItem("currentUser", JSON.stringify(userNam));
            console.log(localStorage.getItem("currentUser"));
            //add new user to data base
            //go to your home page
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
            onChange={(e) => setUserNam(e.target.value)}
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
        </>
    );
}