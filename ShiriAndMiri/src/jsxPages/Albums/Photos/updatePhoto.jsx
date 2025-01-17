import React from "react";
import { useState } from 'react'
import '../../../App.css'
import fetchData from '../../../service/FetchData.js'  

const UpdatePhoto = ({id ,url, thumbnailUrl,title, setData }) => {

    const [newForm,setNewForm] = useState({title:title,url:url,thumbnailUrl:thumbnailUrl});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewForm((prev) => ({ ...prev, [name]: value }));
    }
     const handleUpdate=async (field) =>{
        try {
            const updatedValue = { [field]: newForm[field] };
            const updatedData = await fetchData(`photos?id=${id}`, 'PATCH', updatedValue) || [];
            console.log(updatedData[0]);

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
            <input  name={'title'} value={newForm.title} onChange={handleChange}></input>
            <button onClick={()=>handleUpdate('title')}>update tiltle</button>

            <br />
            <input  name={'url'} value={newForm.url} onChange={handleChange}></input>
            <button onClick={()=>handleUpdate('url')}>update url</button>
            <br />
            <input  name={'thumbnailUrl'} value={newForm.thumbnailUrl} onChange={handleChange}></input>
            <button onClick={()=>handleUpdate('thumbnailUrl')}>update thumbnailUrl</button>

        </>
    )
}
export default UpdatePhoto;