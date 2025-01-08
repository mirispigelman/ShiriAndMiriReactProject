import {useState,Link} from 'react' 
import SignUp from './SignUP'
import './App.css'
export default function Login() {
    const [userNam, setUserNam] = useState('')
    const [password, setPassword] = useState('')

    function errorList(){
        let errorList=[]
        if (userNam===""||password===""){
            errorList.push("All details must be complete");
        }
        ////need to find in the data base if the user exists and check if the password matches
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
            //go to your home page
        }
    }
    return (
        <>
            <h1>Log in</h1>
            <h3>welcome back!</h3>

            <form onSubmit={HandleForm}>
            <input
            type="text" 
            value={userNam}
            placeholder='Enter your full userNam:'
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
            <button type='submit'>Submit</button>
            </form>
            <h4>new here? go to</h4>
            {/*<Link><SignUp/></Link>*/}
        </>
    )
}