import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider } from 'react-router-dom'
import router from './jsxPages/router.jsx';
import ContextUserProvider from './jsxPages/ContextUser';

createRoot(document.getElementById('root')).render(
  // <ContextUserProvider>
      <RouterProvider router={router}/>
  // </ContextUserProvider>


)
