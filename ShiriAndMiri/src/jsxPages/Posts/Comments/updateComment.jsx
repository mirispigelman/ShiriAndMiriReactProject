import React from "react";
import { useState } from 'react'
import '../../../App.css'
import fetchData from '../../../service/FetchData.js'  
const UpdateComment = ({ body,name, setData, id }) => {
    const [newForm,setNewForm] = useState({name:name ,body:body});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewForm((prev) => ({ ...prev, [name]: value }));
    }
   
    const handleUpdate=async (field) =>{
        try {
            console.log("field"+field)
            const updatedValue = { [field]: newForm[field] };
            console.log(updatedValue)
            const updatedData = await fetchData(`comments/${id}`, 'PATCH', updatedValue) || [];
            console.log(updatedData);

            setData((prevData) =>
                prevData.map((item) =>
                    item.id === id ?  updatedData  : item
                )
            );
        } catch (e) {
            console.error('Error fetching:', e);
            alert('Error fetching data');
        }
    }
    return (
        <>
            <input  name={'name'} value={newForm.name} onChange={handleChange}/>
            <button onClick={()=>handleUpdate('name')}>update tiltle</button>
            <br />
            <textarea  name={'body'} value={newForm.body} onChange={handleChange}/>
            <button onClick={()=>handleUpdate('body')}>update body</button>
            
        </>
    )
}
export default UpdateComment;