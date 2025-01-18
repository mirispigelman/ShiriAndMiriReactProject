import React from "react";
import { useState } from 'react'
import '../../App.css'
import handleUpdate from "../../service/handleUpdate.js";
import handleChange from "../handleChangeInput.js";
const UpdateTodo = ({ title, setData, id }) => {
    const [newForm, setNewForm] = useState({title:title});

    return (
        <>
            <input name="title" value={newForm.title} onChange={handleChange(setNewForm)}></input>
            <button onClick={()=>handleUpdate(setData,newForm,`todos/${id}`,'title',id)}>update</button>
        </>
    )
}
export default UpdateTodo;