import { useContext ,useState,useEffect} from "react";
import { Link } from "react-router-dom";
import fetchData from "./FetchData";
import ShowInfo from "./showInfo";
import { ContextUser } from "./ContextUser";
const Home = () =>{
const [showInfo,setShowInfo]=useState(false);
const {user,resetUser}=useContext(ContextUser);

console.log(user);

return(<>
    <>
    <h1>Home</h1>
    <h3>{user.slice(1, -1)},Welcome back!</h3>
    <button onClick={()=>{resetUser()/*go to login page*/}}>log out</button>
    <button onClick={()=>setShowInfo(!showInfo)}>{showInfo?"hide Info":"show Info"}</button>
    {showInfo&&<ShowInfo/>}
    {/* <Link to={'/todos'}>Todos</Link>
    <Link to={'/albums'}>Albums</Link>
    <Link to={'/posts'}>Posts</Link> */}

    </>
</>)
} 


export default Home;
