import React from "react";
import { useState, useContext } from 'react'
import '../../App.css'
import  { ContextUser } from '../ContextUser'
import handleAdd from "../../service/handleAdd.js";
const AddAlbum = ({ setData }) => {
    const { user } = useContext(ContextUser);
    const [newData, setNewData] = useState({ userId: user.id, title: "title" });
    const handleSubmit = (e) => {
        e.preventDefault();
        handleAdd(setData,`albums?userId=${user.id}`, newData)
    };
    return (
        <>
            <form onSubmit={handleSubmit} className="add">
            <br />
            <input placeholder="title"  onChange={(e) => setNewData(prev => ({ ...prev, title: e.target.value }))} required/>
            <br />
            <button type="submit">add</button>
            </form>
        </>
    )
}
export default AddAlbum;