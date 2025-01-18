import React from "react";
import { useState, useContext } from 'react'
import '../../App.css'
import  { ContextUser } from '../ContextUser'
import handleAdd from "../../service/handleAdd";

const AddData = ({ setData }) => {
    const { user } = useContext(ContextUser);
    const [newData, setNewData] = useState({ userId: user.id, title: "", completed: false });

    return (
        <>
            <input placeholder={title} value={newData.title} onChange={(e) => setNewData(prev => ({ ...prev, title: e.target.value }))} />
            <button onClick={()=>handleAdd(setData,`todos?userId=${user.id}`, newData)}>add</button>
        </>
    )
}
export default AddData;