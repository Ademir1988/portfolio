import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Tecnologias from '../router/Tecnologias'

function App() {
  
  return (
    <div className="App">
      <Navbar />           
      <Outlet />      
     </div>
  )
}

export default App
