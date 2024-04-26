import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./components/pages/Home";
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import Navbar from "./components/Navbar";
import Post from "./components/pages/Post";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";
import Logout from "./components/pages/Logout";
function App() {

  let isLogged = true;
  let data = {
    'st': 'User Not Logged In'
  }

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          {/* <Route path="/" element={<h1>Hello React Router</h1>} /> */}
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/post/:Category" element={<Post/>}/>
          <Route path="/post/:Category/:id" element={<Post/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/dashboard" element={isLogged ? <Dashboard/> : <Navigate to="/login" replace state={data}/>}/>
          <Route path="*" element={<h1>Error 404 Page Not Found !!</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
