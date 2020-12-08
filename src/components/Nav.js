import React, { useEffect, useState } from 'react';

const Nav = () => {

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
            <img 
                src="https://pbs.twimg.com/profile_images/859461137146028033/lcEPf_w_.jpg"
                alt="Netflix Logo"
                className="nav-logo"
            >
            </img>
            <ul>
                <li>Shop</li>
                <li>Repair</li>
                <li>Contact</li>
            </ul>
        </div>
    );
};

export default Nav;