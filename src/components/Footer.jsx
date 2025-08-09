import React from 'react'
import '../styles/footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-container">
                <div className="copyright text-center ">
                    <p>© <span>Copyright</span> <strong className="px-1 sitename">Rao Ali Tahir. </strong> <span>All Rights Reserved<br/></span></p>
                </div>
                <div className="header-social-links">
                    <a href="https://x.com/" target='_blank' rel="noopener noreferrer" className="twitter"><i className="bi bi-twitter-x"></i></a>
                    <a href="https://www.facebook.com/" target='_blank' rel="noopener noreferrer" className="facebook"><i className="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com/" target='_blank' rel="noopener noreferrer" className="instagram"><i className="bi bi-instagram"></i></a>
                    <a href="https://www.linkedin.com/" target='_blank' rel="noopener noreferrer" className="linkedin"><i className="bi bi-linkedin"></i></a>
                </div>                                                                                                                                                          
                <div className="credits">
                    <Link to='https://mradnantahseen.netlify.app/' >Developed by <span style={{color:'#9570ecff', fontSize:'20px', fontWeight:'bolder', fontStyle:'italic'}}>THR. Digital</span></Link>
                </div>
            </div>

        </footer>
    )
}

export default Footer