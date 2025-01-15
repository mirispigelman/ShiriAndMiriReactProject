import React from "react";
import {useState, useContext,useEffect} from 'react' 
import '../../App.css'
import fetchData from '../../service/FetchData.js'
import  { ContextUser } from '../ContextUser'
import SearchAlbums from "../searchOptions.jsx";
import {Link, Navigate, Routes,Route, Outlet} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
const Albums=()=>{
    const { user } = useContext(ContextUser);
    const [data, setData] = useState([]);
    const [showBody, setShowBody] = useState(null);

    const [addNew, setAddNew] = useState(false);

    const [searchType, setSearchType] = useState('all');
    const [searchValue, setSearchValue] = useState('');
    useEffect(() => {
        async function getAlbums() {
            let albums = await fetchData(`albums?userId=${user.id}`) || [];
            setData(albums);
        }
        getAlbums();
    }, []);

    return(
        <>
        <h1>Albums</h1>
        <button onClick={() => setAddNew(!addNew)}>add new album</button>
            {/* {addNew && (<>
                <AddPost setData={setData} />
            </>)} */}
            <br/>
            <SearchAlbums searchType={searchType} searchValue={searchValue} setSearchType={setSearchType} setSearchValue={setSearchValue} page='albums'
             />
            <div className="container">
                {data.filter(x => searchType == "all" || x[searchType] == searchValue).map((album, index) => {
                   
                    return (
                        <div key={album.id} className="line">
                            <strong>{index + 1}</strong>
                            <br />
                            {album.title}
                            <br />
                            <button onClick={() => handleDelete(album.id, setData, 'albums')}>delete</button>
                            <button onClick={() => setUpdateactivePostId(album.id)}>edit content</button>
                            <Link>to all photos</Link>
                           <button onClick={() => setShowBody(album.id)}>show content</button>
                            {showBody === todo.id && (
                                <>
                                    <div>
                                        {todo.body}
                                    </div>
                                    <button onClick={() => setShowBody(null)}>Close</button>
                                </>
                            )}
                         
                            {/* {UpdateactivePostId === todo.id && (
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
                            )} */}
                        </div>
                    )
                })}
            </div>
        <Outlet />
        </>
    )
}
export default Albums;