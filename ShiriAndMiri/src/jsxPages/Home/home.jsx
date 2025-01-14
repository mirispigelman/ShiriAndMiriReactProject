import { useContext, useState, useEffect } from "react";
import '../../App.css'
import { Outlet } from 'react-router-dom'
import { ContextUser } from "../ContextUser";
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();

    const { user, resetUser } = useContext(ContextUser);
    
    function logout() {
        resetUser();
        navigate("/login");
    }
    console.log(user);

    return (<>
        <>
            <h1>Home</h1>
            <h3>{user.name},Welcome back!</h3>
            <button className="btnNav" onClick={() => navigate(`home`)}>showInfo</button>
            <button className="btnNav" onClick={() => navigate(`albums`)}>Albums</button>
            <button className="btnNav" onClick={() => navigate(`todos`)}>Todos</button>
            <button className="btnNav" onClick={() => navigate(`posts`)}>Posts</button>
            <button onClick={logout}>log out</button>
            <br />
            <br />
            <Outlet />
        </>
    </>)
}


export default Home;
