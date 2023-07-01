import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './index.css';

function App() {
  
  return (
    <div>      
        <Navbar />          

      
      <Outlet /> 
      <Footer />
      
     </div>
  )
}

export default App
