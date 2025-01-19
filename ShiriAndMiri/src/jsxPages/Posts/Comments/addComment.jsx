import React from "react";
import { useState, useContext } from 'react'
import '../../../App.css'
import  { ContextUser } from '../../ContextUser'
import { useParams } from "react-router-dom";
import handleAdd from "../../../service/handleAdd.js";

const AddData = ({ setData }) => {
    const { postId } = useParams();
    const {user}=useContext(ContextUser);
    const [newData, setNewData] = useState({ postId: postId, name: "name", email: user.email, body: "body" });
    console.log(user.email)

    return (
        <>
        <br/>
            <input placeholder={newData.name}  onChange={(e) => setNewData(prev => ({ ...prev, name: e.target.value }))} />
            <br/>
            <textarea placeholder={newData.body}  onChange={(e) => setNewData(prev => ({ ...prev, body: e.target.value }))} />
            <br/>
            <button onClick={()=>handleAdd(setData,`comments?postId=${postId}`, newData)}>add comment</button>
        </>
    )
}
export default AddData;