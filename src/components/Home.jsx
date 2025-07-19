import { Link } from 'react-router-dom';
import '../styles/home.scss';
import { init } from 'ityped';
import { useRef, useEffect } from 'react';

const Home = () => {

      const textRef = useRef();
    
      useEffect(() => {
        init(textRef.current, {
          showCursor: true,
          backDelay: 1500,
          backSpeed: 60,
          strings: ['Lead Generation Strategist', 'Business Development', 'Email Marketing', 'Scaling Startup from MVP to PMF','SDR-as-a-Service'],
        });
      }, []);

    return (
        <div className='author'>
                <div className="description" data-aos='fade-right'>
                        <h3>Hi there, I am a professional Business Developer</h3>
                        <h4>Currently working in <span className='company-name'>PureLogics, Pvt Limited</span></h4>
                        <h2>Rao Ali Tahir</h2>
                        
                        <h3>Freelancer <span ref={textRef} style={{color:'blueviolet'}}></span></h3>
                        <button className='about-me-btn'>
                        <Link to='/about' style={{textDecoration:'none'}}>About Me</Link>
                        </button>
                </div>
                <div className="profile-logo" data-aos='fade-up'>
                    <img src="images/ali_rao_ai.png" alt="Rao Ali Tahir" className='logo'/>
                </div>
        </div>
    );
};

export default Home