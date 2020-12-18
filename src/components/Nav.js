import React, { useEffect, useState } from 'react';
import '../Nav.css';
import { Link } from 'react-router-dom';
// import { Navbar, Nav } from 'react-bootstrap';
// import ShoppingCart from '../components/../images/cart.svg'
// import axios from 'axios'
import logo from '../images/ikon-logo.png'

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';

const NavBar = (props) => {

    const [show, handleShow] = useState(false)
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if (window.scrollY > 1){
                handleShow(true)
            } else {
                handleShow(false)
            }
        })
        return ()=>{
            window.removeEventListener('scroll')
        }
    }, [])

    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className={`nav ${show && "nav-black"}`}>
            <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar} style={{ color: '#000' }} />
            </Link>
            <Link to="/">
                <img 
                    src={logo}
                    className={`nav-logo ${show && "transition"}`}
                >
                </img>
            </Link>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                    <Link to='#' className='menu-bars'>
                        <AiIcons.AiOutlineClose />
                    </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                        </li>
                    );
                    })}
                </ul>
            </nav>            
        </div>
        </IconContext.Provider>
    </>
    );
};

export default NavBar;