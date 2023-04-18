import { useState, useEffect, useContext } from 'react';
import ResLogo from '../utils/img_5.png';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';
import Instamart from './Instamart';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const loggedInUser = () => {
    return true;
}

const Header = () => {

    const isOnline = useOnline();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // console.log('useEffect');
    });

    // console.log('render');

    const { user } = useContext(UserContext);

    const cartItems = useSelector(store => store.cart.items);  //gives you access to the store

    return (
        <div className='flex justify-between bg-pink-50'>
            <a href='/'>
                <img className='h-28 p-2' src = {ResLogo} alt='food'/>
            </a>
            <div className='nav-items'>
                <ul className='flex py-10'>
                    <Link to='/'>
                        <li className='px-2'>Home</li>
                    </Link>
                    <Link to='/about'>
                        <li className='px-2'>About Us</li>
                    </Link>
                    <Link to='/contact'>
                        <li className='px-2'>Contact Us</li>
                    </Link>
                    
                    <Link to='/instamart'>
                        <li className='px-2'>Instamart</li>
                    </Link>
                    <Link to='/cart'>
                    <li className='px-2'>Cart - {cartItems.length} items</li>
                    </Link>
                </ul>
            </div>
            {/* <h1>{isOnline ? 'Online' : 'Offline'}</h1> */}
            <h1 className=' font-semibold m-6 '>{user.name}</h1>
            {   
                (!isLoggedIn ? 
                <button onClick={() => setIsLoggedIn(true)}>Login</button> : 
                <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                )
            }
        </div>
    )
}

export default Header;
