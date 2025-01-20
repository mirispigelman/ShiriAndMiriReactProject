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
        const [updateActivecommentId, setUpdateActivecommentId] = useState(null);
    
        async function getComments() {
            let comments = await fetchData(`comments?postId=${postId}` ) || [];
            comments= comments.filter(comment => comment.postId != null);
            setData(comments);
        }

        useEffect(() => {
            getComments();
        }, [postId]);

        const access_permission=(email,id,action)=>{
            if(email!=user.email) {
                alert(`you can't ${action} others comments`);
            }
            else if(action=="edit"){
                setUpdateActivecommentId(id);
            }
            else if(action=="delete"){
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
                        <button onClick={() => access_permission(comment.email,comment.id,'delete')}>delete</button>
                        <button onClick={() => access_permission(comment.email,comment.id,'edit')}>edit comment</button>
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
                                <br/>
                                <button onClick={() => {setUpdateActivecommentId(null)}}>Close</button>
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
export default Comments;