import React from "react";
import {createBrowserRouter, Navigate} from 'react-router-dom'
import App from "../App.jsx";
import Home from "./home.jsx"
import Login from "./Login.jsx";
import SignUp from "./SignUP.jsx";
import SignUpPart2 from "./SignUp-part2.jsx";

const router=createBrowserRouter([
    {
        path:'/' ,
        element:<App/>,
        children:[
            {path:'/', element:<Navigate to="/login" replace/> },
            {path:'login',element: <Login/>},
            {path:'signUp',element: <SignUp/>},
            {path:'signUpPart2',element: <SignUpPart2/>},
            {path:'home' , element: <Home/>},
            {path:'*', element:<Navigate to="/login"/>}
        ]
    }
]);
export default router;

