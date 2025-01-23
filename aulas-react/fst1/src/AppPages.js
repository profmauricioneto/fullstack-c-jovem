import React from 'react';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

const info = {
    image: './assets/michaelscott.png',
    name: 'Michael Scott',
    description: 'Main manager of Dunder Miflin'
}

const AppPages = () => {
    return(
        <Router>
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
                <Route path='/about' element={<About image={info.image} name={info.name} description={info.description} />} />
                <Route path='/contact' element={<Contact />}/>
            </Routes>
        </Router>
    );
}

export default AppPages;