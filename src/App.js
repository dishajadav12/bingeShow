import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ShowDetails from './components/ShowDetails';
import Home from './components/Home';
import BookingForm from './components/BookingForm';
import Navbar from './components/Navbar';

function App() {
 

  return (
    <Router>
      <div className="home-container">
       <div className="nav-container">
       <Navbar/>

       </div>
        <div className="container mt-3">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/shows/:id" element={<ShowDetails/>} />
          <Route path="/book/:id" element={<BookingForm/>} />
        </Routes>
      </div>
      </div>
    </Router>

  );
}

export default App;


