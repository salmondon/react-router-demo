// import { useState } from 'react'
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import { BrowserRouter, Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import "./App.css"

function App() {
  // const [count, setCount] = useState(0)
  const navigate = useNavigate();

  return (
    <div className="App">

        <div className="content">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
          </Routes>
        </div>
        <button className="redirect-button" onClick={() => navigate('/')}>Redirect to Home</button>

        <nav >
          <ul className="nav-links"> 
            <li>
              <NavLink to="/" activeclassname="active-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeclassname="active-link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeclassname="active-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>


  
    </div>
  )
}

export default App
