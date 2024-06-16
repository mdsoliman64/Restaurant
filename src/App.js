import React from "react"
import './App.css';
import Home from "./Home";
import Logo from "../src/Assets/logo.jpeg"
function App() {
  return (
    <>
      <header >
        <nav>
          <img src={Logo} alt="logo"/>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </nav>
       
      </header>
      <footer>
        <h6>All right reseve for Little Lemon Restaurant</h6>
      </footer>
    </>
  );
}

export default App;
