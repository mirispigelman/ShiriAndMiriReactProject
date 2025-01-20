import React from "react";
import { createBrowserRouter, Navigate } from 'react-router-dom'
import App from "../App.jsx";
import Home from "./Home/home.jsx"
import Login from "./login.jsx";
import SignUp from "./SignUP.jsx";
import ShowInfo from "./Home/showInfo.jsx";
import SignUpPart2 from "./SignUp-part2.jsx";
import Todos from "./Todos/todos.jsx";
import Albums from "./Albums/albums.jsx";
import Posts from "./Posts/posts.jsx";
import Comments from "./Posts/Comments/comments.jsx";
import Photos from "./Albums/Photos/photos.jsx";
import ContextUserProvider from "./ContextUser.jsx";
const router = createBrowserRouter([
    {
        path: '/',
        element: <ContextUserProvider> <App /> </ContextUserProvider>    ,
        children: [
            { path: '/', element: <Navigate to="/login" replace /> },
            { path: 'login', element: <Login /> },
            {
                path: 'signUp', element: <SignUp />
            },
            { path: 'signUpPart2', element: <SignUpPart2 /> },
            {
                path: 'users/:id/', element: <Home />, children: [
                    { path: 'home', element: <ShowInfo /> },

                    { path: 'todos', element: <Todos /> },
                    {
                        path: 'albums', element: <Albums />, children: [
                            { path: ':albumId/photos', element: <Photos /> },
                        ]
                    },
                    {
                        path: 'posts', element: <Posts />, children: [
                            { path: ':postId/comments', element: <Comments /> },
                        ]
                    },
                ]
            },
            {path:'*', element:<Navigate to="/login"/>}
        ]
    }
]);
export default router;

