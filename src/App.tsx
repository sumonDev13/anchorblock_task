import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Users from "./pages/Users";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
// import { useAppSelector } from "./store/hook";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  const token = localStorage.getItem("token");
  // const {token} =useAppSelector((state)=>state.auth)
  return (
    <BrowserRouter>
     <ToastContainer />
      <Routes>
        <Route path="/" element={<Login email={""} password={""} />} />
        <Route path="/signup" element={<Signup email={""} password={""}/>} />
       {token && <Route path="/users" element={<Users email={""} first_name={""} last_name={""} avatar={""} />} />}
       {token &&  <Route path="/dashboard" element={<Dashboard name={""} />} />}
        <Route path="/navbar" element={<Navbar name={""} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
