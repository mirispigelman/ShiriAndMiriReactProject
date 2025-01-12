import React from "react";
import {createBrowserRouter, Navigate} from 'react-router-dom'
import App from "../App.jsx";
import Home from "./home.jsx"
import Login from "./Login.jsx";
import SignUp from "./SignUP.jsx";
import ShowInfo from "./showInfo.jsx";
import SignUpPart2 from "./SignUp-part2.jsx";
import Todos from "./todos.jsx";
import Albums from "./albums.jsx";
import Posts from "./posts.jsx";
import Comments from "./comments.jsx";
import Photos from "./photos.jsx";
const router=createBrowserRouter([
    {
        path:'/' ,
        element:<App/>,
        children:[
            {path:'/', element:<Navigate to="/login" replace/> },
            {path:'login',element: <Login/>},
            {path:'signUp',element: <SignUp/>,children:[
               {path:'signUpPart2',element: <SignUpPart2/>},  
            ]},
            {path:'home' , element: <Home/>,children:[
                {path:'showInfo',element: <ShowInfo/>},
            ]},
            {path:'todos',element: <Todos/>},
                {path:'albums',element: <Albums/>,children:[
                    {path:'photos',element: <Photos/>},
                ]},
            {path:'posts',element: <Posts/>,children:[
                    {path:'comments',element: <Comments/>},
            ]},
            // {path:'*', element:<Navigate to="/home"/>}
        ]
    }
]);
export default router;

