import {useState,Link, useContext} from 'react' 
import SignUp from './SignUP'
import './App.css'
import FetchData from './FetchData'
import ContextUserProvider, { ContextUser } from './ContextUser'
const Login=()=>{
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const {setUser}=useContext(ContextUser)
    const HandleForm = async (event) => {
        event.preventDefault();
        ////need to find in the data base if the user exists and check if the password matches
        try{
            console.log(`users?username=${userName}&website=${password}'`);
            const myUser = await FetchData(`users?username=${userName}&website=${password}`); 
            if (!myUser[0]) {
                 alert("User not found");
                 return;
            }
            else{
                setUser(myUser[0].name);
                localStorage.setItem("currentUser", JSON.stringify(myUser[0].name));
                console.log(localStorage.getItem("currentUser"));
            }
                    // let todos = await FetchData(`todos?userId=${user.id}`)||[]; 
                    // console.log(todos);
                    // let albums = await FetchData(`albums?userId=${user.id}`)||[]; 
                    // let photos = await FetchData(`photos?albumId=${albums[i].id}`)||[];
                    // console.log(photos);
                    // let comments = await FetchData('comments?'); 
                    // let posts = await FetchData(`posts?userId=${user.id}`)||[]; 
                    // console.log(posts);
                    // console.log(user);
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
            <h4>new here? go to</h4>
            {/* <Link><SignUp/></Link> */}
        </>
    )
}
export default Login