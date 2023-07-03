import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


import { createBrowserRouter, RouterProvider, BrowserRouter,Routes,Route } from 'react-router-dom'

import Home from '../router/Home'
import Tecnologias from '../router/Tecnologias'
import Projetos from '../router/Projetos'
import Sobre from '../router/Sobre'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter basename="/">
  <Routes>
  <Route path="/" element={<App />}>
  <Route index element={<Home />} />
  <Route path="/tecnologias" element={<Tecnologias />} />
  <Route path="/sobre" element={<Sobre />} />
  <Route path="/projetos" element={<Projetos />} />
  </Route>
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
  );