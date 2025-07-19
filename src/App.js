// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Services from './components/Services';
import PageNotFound from './components/PageNotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ Height: '100vh', marginTop: '5px', marginBottom: '0px' }}>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/resume' element={<Resume />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
