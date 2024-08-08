import React, { useEffect } from 'react';
import '../styles/navbar.css';
import logo from "../Logo/EU_CtrAILearning.png";

const NavBar = () => {
    const handleClick = () => {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");
        const body = document.body;

        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        body.classList.toggle("no-scroll");
    };

    const closeMenu = () => {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");
        const body = document.body;

        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        body.classList.remove("no-scroll");
    };

    useEffect(() => {
        const handleResize = () => {
            const body = document.body;
            if (window.innerWidth > 768) {
                closeMenu(); // Close the menu if window is resized to above 768px
                body.classList.remove("no-scroll"); // Enable scroll
            }
        };

        const handleScroll = () => {
            const header = document.querySelector(".header");
            if (window.scrollY > 0) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="header">
            <nav className="navbar">
                <a href="#" className="nav-logo">
                    <img src={logo} alt="Logo" />
                </a>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <a href="#" className="nav-link" onClick={closeMenu}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link" onClick={closeMenu}>About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link" onClick={closeMenu}>Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link" onClick={closeMenu}>Contact</a>
                    </li>
                    <li className="nav-item social-links">
                        <a href="https://www.facebook.com" className="social-link facebook" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://www.youtube.com" className="social-link youtube" target="_blank" rel="noopener noreferrer">YouTube</a>
                        <a href="https://www.twitter.com" className="social-link twitter" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://www.instagram.com" className="social-link instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </li>
                </ul>
                <div className="hamburger" onClick={handleClick}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
