import React from "react";
import { useState, useContext } from 'react'
import '../../App.css'
import  { ContextUser } from '../ContextUser'
import handleAdd from "../../service/handleAdd";

const AddTodo = ({ setData }) => {
    const { user } = useContext(ContextUser);
    const [newData, setNewData] = useState({ userId: user.id, title: "", completed: false });
    const handleSubmit = (e) => {
        e.preventDefault();
        handleAdd(setData, `todos?userId=${user.id}`, newData);
    };
    return (
        <>
            <form onSubmit={handleSubmit} className="add">
            <br/>
            <input placeholder={newData.title} onChange={(e) => setNewData(prev => ({ ...prev, title: e.target.value }))} required/>
            <br/>
            <button type="submit">add</button>
            </form>
        </>
    )
}
export default AddTodo;