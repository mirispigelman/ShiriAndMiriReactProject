import React from "react";
import { useState } from 'react'
import '../../App.css'
import fetchData from '../../service/FetchData.js'  

const UpdateTodo = ({ title, setData, id }) => {
    const [newTitle, setNewTitle] = useState('');
    async function handleInput() {
        try {

            let updateData = await fetchData(`todos/${id}`, 'PATCH', { title: newTitle }) || [];
            console.log(updateData);

            setData(prevData => prevData.map(item => item.id === id ? { ...item, title: newTitle } : item));

        }
        catch (e) {
            console.error('Error fetching:', e);
        }
        
    }
    return (
        <>
            <input placeholder={title} value={newTitle} onChange={(e) => setNewTitle(e.target.value)}></input>
            <button onClick={handleInput}>update</button>
        </>
    )
}
export default UpdateTodo;