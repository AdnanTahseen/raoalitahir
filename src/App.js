// import logo from './logo.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Services from './components/Services';

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
      <main style={{ Height: '100vh', marginTop: '0px', marginBottom: '0px' , backgroundColor:' #000000bb'}}>
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
