import React, { useEffect, useState } from 'react';
import '../Nav.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import ShoppingCart from '../components/../images/cart.svg'
import axios from 'axios'
import logo from '../images/ikon-logo.png'

const NavBar = (props) => {

    const [show, handleShow] = useState(false)

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
        <div className={`nav ${show && "nav-black"}`}>
            <Link to="/">
            <img 
                src={logo}
                className="nav-logo"
            >
            </img>
            </Link>
        {/* <Link to="/login" className="nav-avatar">Log In</Link> */}
    </div>
    );
};

export default NavBar;