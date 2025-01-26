import './App.scss';
import './css/style.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Articles from './pages/articles';
import Booking from './pages/booking';
import Contact from './pages/contact';
import Services from './pages/services';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route index element={<Home/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/about" element={<About/>}  />
              <Route path="/services" element={<Services/>} />
              <Route path="/booking" element={<Booking/>} />
              <Route path="/articles" element={<Articles/>} />
              <Route path="/contact" element={<Contact/>} /> 
          </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
