import React from "react";
import { useState, useContext, useEffect } from 'react'
import '../../App.css'
import fetchData from '../../service/FetchData.js'
import { ContextUser } from '../ContextUser'
import SearchAlbums from "../searchOptions.jsx";
import { Link, Outlet, useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import AddAlbum from "./addAlbum.jsx";

const Albums = () => {
    const navigate = useNavigate();
    const { albumId } = useParams();
    const { user } = useContext(ContextUser);
    const [data, setData] = useState([]);
    const [addNew, setAddNew] = useState(false);
    const [searchType, setSearchType] = useState('all');
    const [searchValue, setSearchValue] = useState('');
    async function getAlbums() {
        let albums = await fetchData(`albums?userId=${user.id}`) || [];
        setData(albums);
    }

    useEffect(() => {
        getAlbums();
    }, []);

    return (
        <>
            <h1>Albums</h1>
            <button onClick={() => setAddNew(!addNew)}>{addNew ? 'close' : 'add new album'}</button>
            {addNew && (<>
                <AddAlbum setData={setData} />
            </>)}
            <br />
            <SearchAlbums searchType={searchType} searchValue={searchValue} setSearchType={setSearchType} setSearchValue={setSearchValue} page='albums'
            />
            <div className="container">
                {data.filter(x => searchType == "all" || x[searchType] == searchValue).map((album) => {

                    return (
                        <div key={album.id} className="line">
                            <strong>{album.id}</strong>
                            <br />
                            <Link to={`${album.id}/photos`}>
                                {album.title}
                            </Link>
                            <br />
                            {albumId === album.id && (
                                <div >
                                    <Outlet />
                                    <button onClick={() => navigate('')}>close</button>
                                </div>
                            )
                            }
                        </div>
                    )
                })}

            </div>
        </>
    )
}
export default Albums;