import React from "react";
import { useState, useContext } from 'react'
import '../../App.css'
import fetchData from '../../service/FetchData.js'
import  { ContextUser } from '../ContextUser'
import handleAdd from "../../service/handleAdd.js";
const AddAlbum = ({ setData }) => {
    const { user } = useContext(ContextUser);
    const [newData, setNewData] = useState({ userId: user.id, title: ""});
    return (
        <>
             <br />
            <input placeholder="title" value={newData.title} onChange={(e) => setNewData(prev => ({ ...prev, title: e.target.value }))} />
            <br />
            <button onClick={()=>handleAdd(setData,`albums?userId=${user.id}`, newData)}>add</button>
        </>
    )
}
export default AddAlbum;