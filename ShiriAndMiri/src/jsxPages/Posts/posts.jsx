import React from "react";
import {useState, useContext, useEffect} from 'react' 
import '../../App.css'
import fetchData from '../../service/FetchData.js'
import  { ContextUser } from '../ContextUser'
import {Link, Navigate, Routes,Route, Outlet} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import SearchPosts from "../searchOptions.jsx";
import UpdatePost from "./updatePost.jsx";
import AddPost from "./addPost.jsx";
import handleDelete from "../../service/handleDelete.js";
const Posts=()=>{
    const { user } = useContext(ContextUser);
    const [data, setData] = useState([]);
    const [UpdateactivePostId, setUpdateactivePostId] = useState(null);
    const [showBody, setShowBody] = useState(null);

    const [addNew, setAddNew] = useState(false);

    const [searchType, setSearchType] = useState('all');
    const [searchValue, setSearchValue] = useState('');
    useEffect(() => {
        async function getPosts() {
            let todos = await fetchData(`posts?userId=${user.id}`) || [];
            setData(todos);
        }
        getPosts();
    }, []);

    return(
        <>
        <h1>Posts</h1>
        <button onClick={() => setAddNew(!addNew)}>add new post</button>
            {addNew && (<>
                <AddPost setData={setData} />
            </>)}
            <br/>
            <SearchPosts searchType={searchType} searchValue={searchValue} setSearchType={setSearchType} setSearchValue={setSearchValue} page='posts'
             />
            <div className="container">
                {data.filter(x => searchType == "all" || x[searchType] == searchValue).map((todo, index) => {
                   
                    return (
                        <div key={todo.id} className="line">
                            <strong>{index + 1}</strong>
                            <br />
                            {todo.title}
                            <br />
                            <button onClick={() => handleDelete(todo.id, setData, 'posts')}>delete</button>
                            <button onClick={() => setUpdateactivePostId(todo.id)}>edit content</button>
                            
                            <button onClick={() => setShowBody(todo.id)}>show content</button>
                            {showBody === todo.id && (
                                <>
                                    <div>
                                        {todo.body}
                                    </div>
                                    <button onClick={() => setShowBody(null)}>Close</button>
                                </>
                            )}
                        
                            {UpdateactivePostId === todo.id && (
                                <>
                                    <div>
                                        <UpdatePost
                                            title={todo.title}
                                            setData={setData}
                                            id={todo.id}
                                            data={data}
                                            body={todo.body}
                                        />
                                    </div>
                                    <button onClick={() => setUpdateactivePostId(null)}>Close</button>
                                </>
                            )}
                        </div>
                    )
                })}
            </div>
        <Outlet />
        </>
    )
}
export default Posts;