import React from "react";
import {useState, useContext,useEffect} from 'react' 
import '../../../App.css'
import fetchData from '../../../service/FetchData.js'
import  { ContextUser } from '../../ContextUser'
import {  useParams} from "react-router-dom";
import AddComment from "./addComment.jsx"
import handleDelete from "../../../service/handleDelete.js";
import Updatecomment from "./updateComment.jsx"

const Comments = () => {
        const { postId } = useParams();
        const { user } = useContext(ContextUser);
        const [data, setData] = useState([]);
        const [addNew, setAddNew] = useState(false);
        const [searchType, setSearchType] = useState('all');
        const [searchValue, setSearchValue] = useState('');
        const [updateActivecommentId, setUpdateActivecommentId] = useState(null);
    
        useEffect(() => {
            async function getComments() {
                let comments = await fetchData(`comments?postId=${postId}`) || [];
                setData(comments);
            }
            getComments();
        }, [postId]);

        const edit_access_permission=(email,id)=>{
            console.log(email)
            console.log(user.email)
            if(email!=user.email) {
                alert("you can't edit others comments");
            }
            else{
                setUpdateActivecommentId(id);
            }
        }

        const delete_access_permission = (email,id) => {
            if(email!=user.email) {
                alert("you can't delete others comments");
            }
            else{
                console.log("lllll")
                handleDelete(id, setData, 'comments');
            }
        }
        if(data.length===0) return(
            <>
            <h4>-----no comments-----</h4>
                <AddComment setData={setData} />
            </>
        )
        return(
            <>
            <div className="comment">
                {data.map((comment) => {
                               
                 return (
                    <div key={comment.id} className="line">
                        <strong>{comment.id}</strong>
                        <br/>
                        <strong>{comment.name}</strong>
                        <br />
                           {comment.body}
                        <br />
                        <button onClick={() => delete_access_permission(comment.email,comment.id)}>delete</button>
                        <button onClick={() => edit_access_permission(comment.email,comment.id)}>edit comment</button>
                        {updateActivecommentId === comment.id && (
                            <>
                                <div>
                                    <Updatecomment
                                       
                                        setData={setData}
                                        name={comment.name}
                                        id={comment.id}
                                        data={data}
                                        body={comment.body}
                                    />
                                </div>
                                <button onClick={() => setUpdateActivecommentId(null)}>Close</button>
                            </>
                        )} 
                    </div>
                )
                })}
                </div>
                <div>
                   <AddComment setData={setData}  />
                </div>

            </>
        )
}
export default Comments