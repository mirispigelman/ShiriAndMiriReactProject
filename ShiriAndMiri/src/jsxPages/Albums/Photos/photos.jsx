import React from "react";
import {useState,useEffect} from 'react' 
import '../../../App.css'
import  { ContextUser } from '../../ContextUser.jsx'
import { useParams } from "react-router-dom";
import handleDelete from "../../../service/handleDelete.js"
import UpdatePhoto from "./updatePhoto.jsx"
import AddPhoto from "./addPhoto.jsx"
import fetchData from "../../../service/FetchData.js";

const Photos=()=>{
    const { albumId } = useParams();
    const [data, setData] = useState([]);
    const [updateActivePhotoId, setUpdateActivePhotoId] = useState(null);
    const [start, setStart] = useState(0);
    const [hasMore, setHasMore] = useState(true);

   //export function getObjectsAlbum(albumId, start, limit, manageApiObject) {
    useEffect(() => {
        setStart(0);
        setData([]);
        setHasMore(true);
        console.log(data);
    }, [albumId]);
  
    useEffect(() => {
        async function getPhotos() {
            console.log(albumId);
            if(!hasMore) return;
           
            let photos = await fetchData(`photos?albumId=${albumId}&_start=${start}&_limit=2`) || [];
            if(photos.length=== 0) {
                setHasMore(false);
                return;
            }
            setData(prevData => [...prevData, ...photos]);
            console.log(data);
        }

        getPhotos();
    }, [albumId,start,hasMore]);
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
                {hasMore &&   <button onClick={() => setStart(start + 2)}>show more</button>}
                {!hasMore && <h4>no more photos</h4>}
                <div>
                    <AddPhoto setData={setData} />
                </div>
            </div>
        </>
    )
}
export default Photos;