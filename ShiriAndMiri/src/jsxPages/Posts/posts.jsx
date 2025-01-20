import React from "react";
import {useState, useContext, useEffect} from 'react' 
import '../../App.css'
import fetchData from '../../service/FetchData.js'
import  { ContextUser } from '../ContextUser'
import { Outlet} from 'react-router-dom'
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
    const [showphotos, setShowphotos] = useState(null);

    const [searchType, setSearchType] = useState('mine');
    const [searchValue, setSearchValue] = useState('');

    const [selectedPost, setSelectedPost] = useState(null);
    const [style, setStyle] = useState(null);

    async function getPosts() {
        let posts = await fetchData(`posts`) || [];
        setData(posts);
    }
    
    useEffect(() => {
        getPosts();
    }, []);
    const showComments = (postId) => {
        if(showphotos === postId) return;
        navigate(`${postId}/comments`);
        setShowphotos(showphotos === postId ? null : postId);
    };

    const access_permission=(userId,action,id)=>{
        if(userId!=user.id) {
            alert(`you can't ${action} others posts`);
        }
        else if(action=="edit"){
            setUpdateactivePostId(id);
        }
        else if(action=="delete"){
            handleDelete(id, setData, 'posts');
        }
    }

    return(
        <>
        <h1>Posts</h1>
        <button onClick={() => setAddNew(!addNew)}>{addNew ? 'close' : 'add new post'}</button>
            {addNew && (<>
                <AddPost setData={setData} />
            </>)}
            <br/>
            <SearchPosts
             searchType={searchType}
             searchValue={searchValue}
             setSearchType={setSearchType}
             setSearchValue={setSearchValue}
             page='posts'
             />
            <div className="container">
                {data.filter((post)=>{
                    if (searchType === 'mine') {
                        return post.userId === user.id;
                    }
                    return searchType == "all" || post[searchType] == searchValue
                }
                ).map((post) => {
                    const isSelected = selectedPost === post.id;
                    return (
                        <div key={post.id} className={style === post.id ? 'on' : 'line'}>
                            <strong>{post.id}</strong>
                            <br />
                            {post.title}
                            <br />
                            {!isSelected&&(
                                <button className="btnNav" onClick={() => {setSelectedPost(post.id); setStyle(post.id)}}>select</button>
                            )}
                            {isSelected&&(
                                <>
                                <button className="btnNav" onClick={() => {setSelectedPost(null); setStyle(null);navigate(".")}}>Deselect</button>
                                <br/>
                                <button onClick={() => access_permission(post.userId,'delete',post.id)}>Delete</button>
                                <button onClick={() => access_permission(post.userId,'edit',post.id)}>Edit Content</button>
                                <button onClick={() => showComments(post.id)}>Show Comments</button>
                                <button onClick={() => setShowBody(post.id)}>Show body</button>

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
                                {showphotos === post.id && (
                                    <>
                                    <Outlet /> 
                                    <button onClick={() => {setShowphotos(null); navigate(".")}}>Close</button>
                                    </>
                                 )                            
                                }
                                </>
                            )}
                            
                       </div>
                    )
                })}
           </div>
        </>
    )
}
export default Posts;