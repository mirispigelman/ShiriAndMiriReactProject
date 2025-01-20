import React from "react";
import { useState, useContext } from 'react'
import '../../../App.css'
import  { ContextUser } from '../../ContextUser'
import { useParams } from "react-router-dom";
import handleAdd from "../../../service/handleAdd.js";

const AddComment = ({ setData }) => {
    const { postId } = useParams();
    const {user}=useContext(ContextUser);
    const [newData, setNewData] = useState({ postId: postId, name: "name", email: user.email, body: "body" });
    const handleSubmit = (e) => {
        e.preventDefault();
        handleAdd(setData, `comments?postId=${postId}`, newData);
    };
    return (
        <>
        <form onSubmit={handleSubmit} className="add">
        <br/>
            <input placeholder={newData.name}  onChange={(e) => setNewData(prev => ({ ...prev, name: e.target.value })) } required/>
            <br/>
            <textarea placeholder={newData.body}  onChange={(e) => setNewData(prev => ({ ...prev, body: e.target.value }))} />
            <br/>
            <button type="submit">add comment</button>
        </form>
       </>
    )
}
export default AddComment;