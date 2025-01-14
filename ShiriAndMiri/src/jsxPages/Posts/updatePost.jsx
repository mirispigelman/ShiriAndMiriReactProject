import React from "react";
import { useState } from 'react'
import '../../App.css'
import fetchData from '../../service/FetchData.js'  

const UpdatePost = ({ body,title, setData, id }) => {

    const [newForm,setNewForm] = useState({title:title,body:body});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewForm((prev) => ({ ...prev, [name]: value }));
    }
     const handleUpdate=async (field) =>{
        try {
            const updatedValue = { [field]: newForm[field] };
            const updatedData = await fetchData(`posts/${id}`, 'PATCH', updatedValue) || [];
            console.log(updatedData);

            setData((prevData) =>
                prevData.map((item) =>
                    item.id === id ?  updatedData  : item
                )
            );
        } catch (e) {
            console.error('Error fetching:', e);
        }
        
    }
    return (
        <>
            <input  name={'title'} value={newForm.title} onChange={handleChange}></input>
            <button onClick={()=>handleUpdate('title')}>update tiltle</button>

            <br />
            <input  name={'body'} value={newForm.body} onChange={handleChange}></input>
            <button onClick={()=>handleUpdate('body')}>update body</button>

        </>
    )
}
export default UpdatePost;