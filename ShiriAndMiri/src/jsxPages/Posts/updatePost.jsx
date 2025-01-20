import React from "react";
import { useState } from 'react'
import '../../App.css'
import handleUpdate from "../../service/handleUpdate";
import handleChange from "../handleChangeInput";
const UpdatePost = ({ body,title, setData, id }) => {
    const [newForm,setNewForm] = useState({title:title,body:body});
   
    return (
        <>
            <input  name='title' value={newForm.title} onChange={handleChange(setNewForm)}/>
            <button onClick={()=>handleUpdate(setData,newForm,`posts/${id}`,'title',id)}>update tiltle</button>
            <br />
            <textarea  name={'body'} value={newForm.body} onChange={handleChange(setNewForm)}/>
            <button onClick={()=>handleUpdate(setData,newForm,`posts/${id}`,'body',id)}>update body</button>

        </>
    )
}
export default UpdatePost;

