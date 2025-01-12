
import { useContext ,useState,useEffect} from "react";
import fetchData from "./FetchData";
import { ContextUser } from "./ContextUser";
import {Link, Navigate, Routes,Route, Outlet} from 'react-router-dom'


const ShowInfo=()=>{
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const {user}=useContext(ContextUser);
    
    useEffect(() => {
        async function fetchUserData() {
            try{
                const InfoUser=  await fetchData(`users?name=${user.slice(1, -1)}`);
                console.log(InfoUser[0]);
                setData(InfoUser[0]);
            }
            catch(e){
                console.error('Error fetching:', error);
            }
            finally{
                setLoading(false);
            }
        }
        fetchUserData();
    },[]);
    console.log(user);
    console.log(data);
    if (loading) return <p>Loading...</p>;
    return(
        <div>
              {Object.entries(data).map(([key, value])=>(
                <ul key={key}>
                  <strong>{key}:</strong>
                  {typeof value === 'object' ? (
                    <ul>
                     {Object.entries(value).map(([subKey, subValue]) => (
                            <li key={[key,subKey]}>
                                {subKey === "geo" && typeof subValue === "object" ? (
                                    <>
                                        <strong>{subKey}:</strong> {subValue.lat}, {subValue.lng}
                                    </>
                                ) : (
                                    <>
                                        <strong>{subKey}:</strong> {String(subValue)}
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                    ):(
                 <>{String(value)} </>
                    )}
                </ul>
              ))}
        </div>
    )
}
export default ShowInfo;