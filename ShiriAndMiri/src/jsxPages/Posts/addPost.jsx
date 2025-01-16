import React from "react";
import { useState, useContext } from 'react'
import '../../App.css'
import fetchData from '../../service/FetchData.js'
import  { ContextUser } from '../ContextUser'

const AddPost = ({ setData }) => {
    const { user } = useContext(ContextUser);
    const [newData, setNewData] = useState({ userId: user.id, title: "",body: "" });
    async function handlAdd() {
        try {

            let updateData = await fetchData(`posts?userId=${user.id}`, 'POST', newData) || [];
            console.log(updateData);
            setData(prevData => [...prevData, newData]);
        }
        catch (e) {
            console.error('Error fetching:', e);
        }
    }
    return (
        <>
             <br />
            <input placeholder="title" value={newData.title} onChange={(e) => setNewData(prev => ({ ...prev, title: e.target.value }))} />
            <br />
            <textarea placeholder="body" value={newData.body} onChange={(e) => setNewData(prev => ({ ...prev, body: e.target.value }))} />
            <br />
            <button onClick={handlAdd}>add</button>
        </>
    )
}
export default AddPost;