import React, { useEffect, useState } from 'react';
import '../Nav.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import ShoppingCart from '../components/../images/cart.svg'
import axios from 'axios'

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
            <Navbar collapseOnSelect expand="lg" className={`nav ${show && "nav-black"}`} style={{zIndex: 4}}>
                <Navbar.Brand href="/">
                    <img 
                        src="https://static.wixstatic.com/media/3e1a59_e03c1ae76b324b4aa19b57e8032a8443~mv2.png/v1/fill/w_448,h_140,al_c,lg_1,q_85/3e1a59_e03c1ae76b324b4aa19b57e8032a8443~mv2.webp"
                        alt="Ikon Weapons Logo"
                        className="nav-logo">
                    </img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-center" style={{flex:1}}>
                        <Link to="/shop" className={`nav-link ${show && "transition"}`}>
                        Ikon Shop
                        </Link>
                        <Link to="/repair" className={`nav-link ${show && "transition"}`}>
                        Repairs
                        </Link>
                        <Link to="/contact" className={`nav-link ${show && "transition"}`}>
                        Contact
                        </Link>
                    </Nav>
                    <Nav className="ml-auto">
                        { props.loggedInStatus === "NOT_LOGGED_IN" ? 
                        <Link to="/login" className={`nav-link ${show && "transition"}`}>Login</Link>
                        :
                        props.user.admin ? 
                        <Nav.Item className={`nav-link ${show && "transition"}`} onClick={()=>props.handleLogout()}>Logout: Admin</Nav.Item>
                        :
                        <><Nav.Item className={`nav-link ${show && "transition"}`} onClick={()=>props.handleLogout()}>Logout</Nav.Item>
                        <Nav.Item className="nav-shopping-cart">
                            <img src={ShoppingCart}></img>
                        </Nav.Item></>
                         }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    );
};

export default NavBar;