import React from "react";
import { useState, useContext } from 'react'
import '../../../App.css'
import fetchData from '../../../service/FetchData.js'
import  { ContextUser } from '../../ContextUser'
import { useParams } from "react-router-dom";

const AddData = ({ setData }) => {
    const { postId } = useParams();
    const {user}=useContext(ContextUser);
    const [newData, setNewData] = useState({ postId: postId, name: "name", email: user.email, body: "body" });
    async function handleInput() {
        try {

            let updateData = await fetchData(`comments?postId=${postId}`, 'POST', newData) || [];
            console.log(updateData);
            setData(prevData => [...prevData, newData]);
        }
        catch (e) {
            console.error('Error fetching:', e);
            alert('Error fetching data');
        }
    }
    return (
        <>
        <br/>
            <input placeholder={newData.name}  onChange={(e) => setNewData(prev => ({ ...prev, name: e.target.value }))} />
            <br/>
            <textarea placeholder={newData.body}  onChange={(e) => setNewData(prev => ({ ...prev, body: e.target.value }))} />
<br/>
            <button onClick={handleInput}>add comment</button>
        </>
    )
}
export default AddData;