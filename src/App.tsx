import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Users from "./pages/Users";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
// import { useAppSelector } from "./store/hook";

function App() {
  const token = localStorage.getItem("token");
  // const {token} =useAppSelector((state)=>state.auth)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login name={""} />} />
        <Route path="/signup" element={<Signup name={""} />} />
       {token && <Route path="/users" element={<Users name={""} />} />}
       {token &&  <Route path="/dashboard" element={<Dashboard name={""} />} />}
        <Route path="/navbar" element={<Navbar name={""} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
