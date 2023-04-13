import { useState, useEffect } from 'react';
import ResLogo from '../utils/img_5.png';
import { Link } from 'react-router-dom';

const loggedInUser = () => {
    return true;
}

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        console.log('useEffect');
    });

    console.log('render');

    return (
        <div className='header'>
            <a href=''>
                <img className='logo' src = {ResLogo} alt='food'/>
            </a>
            <div className='nav-items'>
                <ul>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/about'>
                        <li>About Us</li>
                    </Link>
                    <Link to='/contact'>
                        <li>Contact Us</li>
                    </Link>
                    <li>Cart</li>
                </ul>
            </div>
            {
                (!isLoggedIn ? 
                <button onClick={() => setIsLoggedIn(true)}>Login</button> : 
                <button onClick={() => setIsLoggedIn(false)}>Logout</button>)
            }
        </div>
    )
}

export default Header;
