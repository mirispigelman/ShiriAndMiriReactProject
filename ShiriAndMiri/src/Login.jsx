import {useState,Link} from 'react' 
import SignUp from './SignUP'
import './App.css'
import FetchData from './FetchData'
const Login=()=>{
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const HandleForm = async (event) => {
        event.preventDefault();
        ////need to find in the data base if the user exists and check if the password matches
        try{
            console.log(`users?username=${userName}&website=${password}'`);
            const user = await FetchData(`users?username=${userName}&website=${password}`); 
            if (!user[0]) {
                 alert("User not found");
                 return;
            }
            else{
                localStorage.setItem("currentUser", JSON.stringify(user[0].name));
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