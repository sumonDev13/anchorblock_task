import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Users from './pages/Users';
import Dashboard from './pages/Dashboard';

function App() {
  

  return (
    <BrowserRouter>
  
    <Routes>
      <Route path='/' element={<Login name={''} />} />
      <Route path='/signup' element={<Signup name={''} />} />
      <Route path='/users' element={<Users name={''} />} />
      <Route path='/dashboard' element={<Dashboard name={''} />} />
     
      
    </Routes>
  </BrowserRouter>
  )
}

export default App
