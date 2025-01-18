import React from "react";
import {useState, useContext,useEffect} from 'react' 
import '../../../App.css'
import fetchData from '../../../service/FetchData.js'
import  { ContextUser } from '../../ContextUser.jsx'
import {Link, Navigate, Routes,Route, Outlet} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import handleDelete from "../../../service/handleDelete.js"
import UpdatePhoto from "./updatePhoto.jsx"
import AddPhoto from "./addPhoto.jsx"

const Photos=()=>{
    const { albumId } = useParams();
    const { user } = useContext(ContextUser);
    const [data, setData] = useState([]);
    const [updateActivePhotoId, setUpdateActivePhotoId] = useState(null);
    useEffect(() => {
        async function getPhotos() {
            let photos = await fetchData(`photos?albumId=${albumId}`) || [];

            setData(photos);
                }
        getPhotos();
    }, [albumId]);
    if(data.length === 0) return (<>
        <h4>no photos</h4> 
        <br />
        <AddPhoto setData={setData} />
        <br />
    </>)
    return(
        <>
           <div className="container">
            {data.map((photo) => {    
            return (
                <div key={photo.id} className="line">
                    <strong>{photo.id}</strong>
                    <h3>{photo.title}</h3>
                    <br />
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                    <br />
                    <button onClick={() => handleDelete(photo.id, setData, 'photos')}>delete</button>
                    <button onClick={() => setUpdateActivePhotoId(photo.id)}>edit photo</button>

                    
                    {updateActivePhotoId === photo.id && (
                        <>
                            <div>
                                <UpdatePhoto
                                    title={photo.title}
                                    setData={setData}
                                    id={photo.id}
                                    data={data}
                                    url={photo.url}
                                    thumbnailUrl={photo.thumbnailUrl}
                                />
                            </div>
                            <button onClick={() => setUpdateActivePhotoId(null)}>Close</button>
                        </>
                    )} 
                    
                </div>
                )
                })}
                <div>
                    <AddPhoto setData={setData} />
                </div>
            </div>
        </>
    )
}
export default Photos;