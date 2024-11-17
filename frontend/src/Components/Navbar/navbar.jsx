import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'
import logo from '../Assets/Frontend_Assets/logo.png'
import cart_icon from '../Assets/Frontend_Assets/cart_icon.png'
import { Shopcontext } from '../../Context/ShopContext';
export default function Navbar() {
    const [menu,setMenu] = useState("shop");
    const {cartTotalItems} = useContext(Shopcontext);
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="LOGO" />
            <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none",color:"#626262"}} to="/">Shop</Link>
            {menu === "shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:"none",color:"#626262"}} to="/mens">Men</Link>
            {menu === "men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}><Link  style={{textDecoration:"none",color:"#626262"}} to="/womens">Women</Link>
            {menu === "women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link  style={{textDecoration:"none",color:"#626262"}} to="/kids">Kids</Link>
            {menu === "kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
         
           {
              localStorage.getItem('auth-token')?
              <button onClick={() => {
                  localStorage.removeItem('auth-token');
                  window.location.replace('/');
              }}>Logout</button> :  <Link  style={{textDecoration:"none",color:"#515151"}} to="/login">  <button>Login</button > </Link>

           }
        
            <Link  to="/cart"><img src={cart_icon} alt="cart-icon" /></Link> 
             <div className="nav-cart-count">{cartTotalItems()}</div>
        </div>
    </div>
  )
}
