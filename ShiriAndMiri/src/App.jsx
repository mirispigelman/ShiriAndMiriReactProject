import './App.css'
import { Outlet, useNavigate } from 'react-router-dom';
import ContextUserProvider, { ContextUser } from "./jsxPages/ContextUser";

function App() {
return (
    <>
      <Outlet />
    </>
  )
}

export default App
