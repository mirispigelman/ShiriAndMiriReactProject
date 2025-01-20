import React from "react";
import { useState } from 'react'
import '../../../App.css'
import handleUpdate from "../../../service/handleUpdate";
import handleChange from "../../handleChangeInput";
const UpdatePhoto = ({id ,url, thumbnailUrl,title, setData }) => {

    const [newForm,setNewForm] = useState({title:title,url:url,thumbnailUrl:thumbnailUrl});

    return (
        <>
            <input  name='title' value={newForm.title} onChange={handleChange(setNewForm)}></input>
            <button onClick={()=>handleUpdate(setData,newForm,`photos/${id}`,'title',id)}>update tiltle</button>
            <br />
            <input  name='url' value={newForm.url} onChange={handleChange(setNewForm)}></input>
            <button onClick={()=>handleUpdate(setData,newForm,`photos/${id}`,'url',id)}>update url</button>
            <br />
            <input  name='thumbnailUrl' value={newForm.thumbnailUrl} onChange={handleChange(setNewForm)}></input>
            <button onClick={()=>handleUpdate(setData,newForm,`photos/${id}`,'thumbnailUrl',id)}>update thumbnailUrl</button>

        </>
    )
}
export default UpdatePhoto;