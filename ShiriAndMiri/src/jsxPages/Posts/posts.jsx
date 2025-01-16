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
    const navigate=useNavigate()
    const { user } = useContext(ContextUser);
    const [data, setData] = useState([]);
    const [UpdateactivePostId, setUpdateactivePostId] = useState(null);
    const [showBody, setShowBody] = useState(null);
    const [addNew, setAddNew] = useState(false);
    const [openPostId, setOpenPostId] = useState(null);
    const [searchType, setSearchType] = useState('all');
    const [searchValue, setSearchValue] = useState('');

    const [style, setStyle] = useState(null);
    useEffect(() => {
        async function getPosts() {
            let posts = await fetchData(`posts`) || [];
            setData(posts);
        }
        getPosts();
    }, []);

    const showComments = (postId) => {
        if(openPostId === postId) return;
        navigate(`${postId}/comments`);
        setOpenPostId(openPostId === postId ? null : postId);
        setStyle(postId)
    };
    const deletePost = (id) => {
        if(id!=user.id) {
            alert("you can't delete others posts");
        }
        else{
            handleDelete(id, setData, 'posts');
        }
    }
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
                {data.filter((post)=>{
                    if (searchType === 'mine') {
                        return post.userId === user.id;
                    }
                    return searchType == "all" || post[searchType] == searchValue
                }
                ).map((post) => {
                    return (
                        <div key={post.id} className={style === post.id ? 'on' : 'line'}>
                            <strong>{post.id}</strong>
                            <br />
                            {post.title}
                            <br />
                            <button onClick={() => deletePost(post.userId)}>delete</button>
                            <button onClick={() => setUpdateactivePostId(post.id)}>edit content</button>
                            <button onClick={() => showComments(post.id)}>
                            Show Comments
                            </button>
                            <button onClick={() => setShowBody(post.id)}>show content</button>
                            {showBody === post.id && (
                                <>
                                    <br />
                                        {post.body}

                                    <br />
                                    <button onClick={() => setShowBody(null)}>Close</button>
                                </>
                            )}
                        
                            {UpdateactivePostId === post.id && (
                                <>
                                    <div>
                                        <UpdatePost
                                            title={post.title}
                                            setData={setData}
                                            id={post.id}
                                            data={data}
                                            body={post.body}
                                        />
                                    </div>
                                    <button onClick={() => setUpdateactivePostId(null)}>Close</button>
                                </>
                            )}
                             {openPostId === post.id && (
                                <>
                                <Outlet /> 
                                
                                <button onClick={() => {setOpenPostId(null); setStyle(null)}}>Close</button>
                                </>
                             )                            
                             }
                       </div>
                    )
                })}
           </div>
        </>
    )
}
export default Posts;