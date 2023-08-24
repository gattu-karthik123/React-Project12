import './App.css';
import About from './component/About';
import Home from './component/Home';
import Contact from './component/Contact';
import Work from './component/Work';
import Testmonial from './component/Testmonial';
import { Route,Routes, } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
function App() {
  return (
    <div className="App">
      <>
        {/* <Home />
        <About /> */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/work' element={<Work />} />
          <Route path='/testmonial' element={<Testmonial/>} />
        </Routes>
        <Contact />
        <Footer />
      </>
    </div>
  );
}
export default App;
