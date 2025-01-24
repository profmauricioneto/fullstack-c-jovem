import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './AppPages.css';

const AppPages = () => {

    const infoAbout = {src: '../public/assets/michaelscott.png', name: 'Michael Scott', description: 'Main Manager at Dunder Miflin Company'};

    return(
        <Router>
            <div className='nav-bar'>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About src={infoAbout.src} name={infoAbout.name} description={infoAbout.description} />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
};

export default AppPages;