import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigation = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigation('/signup');
    }
    return (
        <div>
        <img alt="logo" className='logo' src="https://logo-all.ru/uploads/posts/2016-03/0_flipkart_logo.jpg" />
            {auth ?
                <ul className='nav-ul'>
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="add">Add Product</Link></li>
                    <li><Link to="profile">Profile</Link></li>
                    <li><Link to="demo">Demo Component</Link></li>
                    <li><Link onClick={logout} to="signup">Logout - ({JSON.parse(auth).name})</Link></li>
                </ul>
                :
                <ul className='nav-ul nav-right'>
                    <li><Link to="signup">Sign Up</Link></li>
                    <li><Link to="login">Login</Link></li>
                </ul>
            }
        </div>
    )
}
export default Nav;