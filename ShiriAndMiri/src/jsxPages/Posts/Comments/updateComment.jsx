import React from "react";
import { useState } from 'react'
import '../../../App.css'
import handleUpdate from "../../../service/handleUpdate.js";
import handleChange from "../../handleChangeInput.js";
const UpdateComment = ({ body,name, setData, id }) => {
    const [newForm,setNewForm] = useState({name:name ,body:body});

    return (
        <>
            <input  name={'name'} value={newForm.name} onChange={handleChange(setNewForm)}/>
            <button onClick={()=>handleUpdate(setData,newForm,`comments/${id}`,'name')}>update name</button>
            <br />
            <textarea  name={'body'} value={newForm.body} onChange={handleChange(setNewForm)}/>
            <button onClick={()=>handleUpdate(setData,newForm,`comments/${id}`,'body')}>update body</button>
            
        </>
    )
}
export default UpdateComment;