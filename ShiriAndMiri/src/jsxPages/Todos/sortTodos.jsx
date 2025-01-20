import React from "react";
import '../../App.css'

const SortTodos = ({ sortType, setSortType }) => {
    return (
        <>
            <label htmlFor="sort-type">Sort by: </label>
            <select
                id="sort-type"
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
            >
                <option value="id">ID</option>
                <option value="alfabetical">alfabetical</option>
                <option value="completed">completed</option>
                <option value="random">random</option>

            </select>
            <br />
        </>
    );
};
export default SortTodos;