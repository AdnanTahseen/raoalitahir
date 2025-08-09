import { Link } from 'react-router-dom';
import '../styles/home.scss';
import { init } from 'ityped';
import { useRef, useEffect } from 'react';
import ServicesIntroduction from './homeSections/ServicesIntroduction';
import License from './homeSections/License';

const Home = () => {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Lead Generation Strategist', 'Business Development', 'Email Marketing', 'Scaling Startup from MVP to PMF', 'SDR-as-a-Service'],
    });
  }, []);

  return (
    <>
      <div className='author'>
        <div className="description header-child" data-aos='fade-right'>
          <div className="description-inner-div">
            <h1>I am <span className='author_name'><br></br>Rao Ali Tahir</span> </h1>
            <h3>Expert Business Developer</h3>
            <h3>Lead Generation Specialist</h3>
            <br />
            {/* <br /> */}
            {/* <h3>Combining data-driven insights</h3> */}
            {/* <h4>Results-driven Business Developer</h4> */}

            <h3><span ref={textRef} style={{ color: 'blueviolet' }}></span></h3>
            <br />
            <button className='about-me-btn'>
              <Link to='/about' style={{ textDecoration: 'none' }}>About Me</Link>
            </button>
          </div>
        </div>
        <div className="profile-logo header-child" data-aos='fade-up'>
          <img src="images/Author.png" alt="Rao Ali Tahir" className='logo' />
        </div>
      </div>
      <ServicesIntroduction />
      <License />
      </>
  );
};

export default Home