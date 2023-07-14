import './App.css';
import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ShowDetails from './components/ShowDetails';
import Home from './components/Home';
import BookingForm from './components/BookingForm';
import NavbarLeft from './components/NavbarLeft';
import LoadingBar from 'react-top-loading-bar';

function App() {
  const [progress, setProgress] = useState(0)


  return (
    <Router>
      <div className="home-container">
       <div className="nav-container">
       <div className="loader">
          <LoadingBar color="white" progress={progress} />
        </div>
       <NavbarLeft/>

       </div>
        <div className="container mt-3">
        <Routes>
          <Route exact path="/" element={<Home setProgress={setProgress}/>}/>
          <Route path="/shows/:id" element={<ShowDetails setProgress={setProgress}/>} />
          <Route path="/book/:id" element={<BookingForm setProgress={setProgress}/>} />
        </Routes>
      </div>

      </div>
    </Router>

  );
}

export default App;


