import React from "react";
import { useState, useContext } from 'react'
import '../../App.css'
import fetchData from '../../service/FetchData.js'
import  { ContextUser } from '../ContextUser'

const AddData = ({ setData }) => {
    const { user } = useContext(ContextUser);
    const [newData, setNewData] = useState({ userId: user.id, title: "", completed: false });
    async function handleInput() {
        try {

            let updateData = await fetchData(`todos?userId=${user.id}`, 'POST', newData) || [];
            console.log(updateData);
            setData(prevData => [...prevData, newData]);
        }
        catch (e) {
            console.error('Error fetching:', e);
        }
    }
    return (
        <>
            <input placeholder={title} value={newData.title} onChange={(e) => setNewData(prev => ({ ...prev, title: e.target.value }))} />
            <button onClick={handleInput}>add</button>
        </>
    )
}
export default AddData;