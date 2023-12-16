import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Users from "./pages/Users";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login name={""} />} />
        <Route path="/signup" element={<Signup name={""} />} />
        <Route path="/users" element={<Users name={""} />} />
        <Route path="/dashboard" element={<Dashboard name={""} />} />
        <Route path="/navbar" element={<Navbar name={""} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
