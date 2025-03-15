import React from "react"

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "../src/Pages/Home";
import BookingPage from "./Pages/BookingPage";
import ConfirmedBooking from "./Component/ConfirmedBooking "
import Footer from "../src/Component/Footer"
function App() {
  return (
    <>
    
      <header >
       <nav>
          <Navbar/>
       </nav>
       
      </header>
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Home/>}></Route>
           <Route path="/booking" element={<BookingPage/>}></Route>
           <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </BrowserRouter>
   
     <footer>
          <Footer/>
     </footer>
    </>
  );
}

export default App;
