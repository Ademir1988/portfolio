import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from '../router/Home'
import Tecnologias from '../router/Tecnologias'
import Projetos from '../router/Projetos'
import Sobre from '../router/Sobre'



const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,

      },
      {
        path: '/tecnologias',
        element: <Tecnologias />
      },
      {
        path: '/Sobre',
        element: <Sobre />
      },
      {
        path: '/projetos',
        element: <Projetos />
      },



    ]
  },



])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} basename={'https://ademir1988.github.io/portfolio'}>
      <App/>
    </RouterProvider>

  </React.StrictMode>


)
