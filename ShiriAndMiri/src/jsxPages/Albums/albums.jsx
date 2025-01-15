import React from "react";
import {useState, useContext,useEffect} from 'react' 
import '../../App.css'
import fetchData from '../../service/FetchData.js'
import  { ContextUser } from '../ContextUser'
import SearchAlbums from "../searchOptions.jsx";
import {Link, Navigate, Routes,Route, Outlet} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import ShowPhotos from "./Photos/photos.jsx"


const Albums=()=>{
   
     const navigate = useNavigate();
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
                             <Link to={`${album.id}/photos`} style={{
                                     color: "blue",
                                         textDecoration: "none",
                                         }}
                                      >
                                    {album.title}
                                </Link>
                            <br />
                        </div>
                    )
                })}
            </div>
        <Outlet />
        </>
    )
}
export default Albums;