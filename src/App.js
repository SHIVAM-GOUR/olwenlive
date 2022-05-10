import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About';
import Distributors from './components/Distributors';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {

  return (
    <div>
      <Router>
          <Navbar />
        <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;