import React, { useEffect, useRef } from 'react'
import './navbar.scss';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const currentLoc = useLocation();
    const [isActive, setIsActive] = useState(currentLoc.pathname);
    const middleRefBar = useRef(null);
    const sidebarRef = useRef(null);

    useEffect(() => {

    }, []);
    const closeSideBar = () => {
        const sidebar = sidebarRef.current;
        sidebar.style.right = '-250px';

    }
    const showSideBar = () => {
        const sidebar = sidebarRef.current;
        sidebar.style.right = '0px';

    }

    return (
        <nav id="navmenu" className="navmenu">
            <div className='left'>
                <div className="logo-div">
                    <Link to='/' className='logo-brand'>
                        <img src="/images/Author.png" alt="" className='profile-logo' />
                        <span>Lead Generation Strategist</span>
                    </Link>

                </div>
            </div>
            <div className='middle-nav middle' ref={middleRefBar}>
                <ul>
                    <NavLink to='/' className={'li-link ' + (isActive === '/' ? 'active' : '')} onClick={() => setIsActive('/')}>Home</NavLink>
                    <NavLink to='/about' className={'li-link ' + (isActive === '/about' ? 'active' : '')} onClick={() => setIsActive('/about')}>About</NavLink>
                    <NavLink to='/projects' className={'li-link ' + (isActive === '/projects' ? 'active' : '')} onClick={() => setIsActive('/projects')}>Projects</NavLink>
                    <NavLink to='/resume' className={'li-link ' + (isActive === '/resume' ? 'active' : '')} onClick={() => setIsActive('/resume')}>Resume</NavLink>
                    <NavLink to='/services' className={'li-link ' + (isActive === '/services' ? 'active' : '')} onClick={() => setIsActive('/services')}>Services</NavLink>
                    <NavLink to='/contact' className={'li-link ' + (isActive === '/contact' ? 'active' : '')} onClick={() => setIsActive('/contact')}>Contact</NavLink>
                </ul>
            </div>
            <div className="right">
                <div className="header-social-links">
                    <a href="https://x.com/" target='_blank' rel="noopener noreferrer" className="twitter"><i className="bi bi-twitter-x"></i></a>
                    <a href="https://www.facebook.com/" target='_blank' rel="noopener noreferrer" className="facebook"><i className="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com/" target='_blank' rel="noopener noreferrer" className="instagram"><i className="bi bi-instagram"></i></a>
                    <a href="https://www.linkedin.com/" target='_blank' rel="noopener noreferrer" className="linkedin"><i className="bi bi-linkedin"></i></a>
                </div>
            </div>
            <div className="sidebar-icon" onClick={() => showSideBar()}>
                <div className='sidebar-div'>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            <div className='sidebar-menu' ref={sidebarRef} >
                <div className="sidebar-menu-div">
                    <h4 className='close_btn' onClick={() => closeSideBar()}><span>X</span></h4>
                    <ul>
                        <NavLink to='/' className={'li-link ' + (isActive === '/' ? 'active' : '')} onClick={() => setIsActive('/')}>Home</NavLink>
                        <NavLink to='/about' className={'li-link ' + (isActive === '/about' ? 'active' : '')} onClick={() => setIsActive('/about')}>About</NavLink>
                        <NavLink to='/projects' className={'li-link ' + (isActive === '/projects' ? 'active' : '')} onClick={() => setIsActive('/projects')}>Projects</NavLink>
                        <NavLink to='/resume' className={'li-link ' + (isActive === '/resume' ? 'active' : '')} onClick={() => setIsActive('/resume')}>Resume</NavLink>
                        <NavLink to='/services' className={'li-link ' + (isActive === '/services' ? 'active' : '')} onClick={() => setIsActive('/services')}>Services</NavLink>
                        <NavLink to='/contact' className={'li-link ' + (isActive === '/contact' ? 'active' : '')} onClick={() => setIsActive('/contact')}>Contact</NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar