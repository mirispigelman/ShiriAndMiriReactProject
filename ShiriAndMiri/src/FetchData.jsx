import {useState,Link} from 'react' 

import './App.css'
  async function fetchData(navigateString){
        const response = await fetch(`http://localhost:3000/${navigateString}`); 
        const data = await response.json(); 
        console.log(data);

        return data;
}
export default fetchData