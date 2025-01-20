import React, { useEffect } from "react";
import { useState, useContext } from 'react'
import '../../App.css'
import fetchData from '../../service/FetchData.js'
import { ContextUser } from '../ContextUser.jsx'
import handleDelete from "../../service/handleDelete.js";
import UpdateTodo from "./updateTodo.jsx";
import AddTodo from "./addTodo";
import SortTodos from "./sortTodos";
import SearchTodos from "../searchOptions.jsx";
const Todos = () => {
    const { user } = useContext(ContextUser);
    const [data, setData] = useState([]);
    const [activeTodoId, setActiveTodoId] = useState(null);
    const [addNew, setAddNew] = useState(false);

    const [sortType, setSortType] = useState("id");
    
    const [searchType, setSearchType] = useState('all');
    const [searchValue, setSearchValue] = useState('');

    async function getTodos() {
        let todos = await fetchData(`todos?userId=${user.id}`) || [];
        setData(todos);

    }
    function sortBy(a,b,sortType){
        if(sortType === 'id') return a.id.localeCompare(b.id);
        if(sortType === 'alfabetical') return a.title.localeCompare(b.title);
        if(sortType === 'completed') return b.completed - a.completed;
        if(sortType === 'random') return Math.random() - Math.random();
    }
    const handleCheckboxToggle = async (todo) => {
        try {
            let responseTodo = await fetchData(`todos/${todo.id}`, 'PATCH', { completed: !todo.completed }) || [];
            console.log(responseTodo);
            setData(prevData => prevData.map(item => item.id === todo.id ? { ...item, completed: !item.completed } : item));
        }
        catch (e) { console.error('Error fetching:', e); }
    }

    useEffect(() => {
        getTodos();
    }, []);

    console.log(user.id);
    console.log(data);

    return (
        <>
            <h1>Todos</h1>
            <button onClick={() => setAddNew(!addNew)}>{addNew ? 'close' : 'add new todo'}</button>
            {addNew && (<>
                <AddTodo setData={setData} />
            </>)}
            <br/>
            <SortTodos setSortType={setSortType} sortType={sortType}/>
            <br/>
            <SearchTodos searchType={searchType} searchValue={searchValue} setSearchType={setSearchType} setSearchValue={setSearchValue} page='todos'
             />
            <div className="container">
                {data.sort((a, b) => sortBy(a, b, sortType)).filter((todo) => {
                    if(searchType==='completed') return todo.completed==true;
                    if(searchType==='uncompleted') return todo.completed==false;

                    return searchType == "all" || todo[searchType] == searchValue
                }
                    
                ).map((todo) => {
                   
                    return (
                        <div key={todo.id} className="line">
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => handleCheckboxToggle(todo)}

                            />
                            <strong>{todo.id}</strong>
                    
                            <br />
                            <button onClick={() => handleDelete(todo.id, setData, 'todos')}>delete</button>
                            <button onClick={() => setActiveTodoId(todo.id)}>edit content</button>
                            <br />
                            {todo.title}
                            {activeTodoId === todo.id && (
                                <>
                                    <div>
                                        <UpdateTodo
                                            title={todo.title}
                                            setData={setData}
                                            id={todo.id}
                                            data={data}
                                        />
                                    </div>
                                    <button onClick={() => setActiveTodoId(null)}>Close</button>
                                </>
                            )}
                        </div>
                    )
                })}
            </div>
        </>

    )
}
export default Todos;