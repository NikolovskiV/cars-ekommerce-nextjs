import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import Cart from './Cart';
import { useStateContext } from '@/context/StateContext';
import Image from 'next/image';
import Logo from '../Images/LogoOne.png';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">
          <Image src={Logo} alt="Logo" className="navbar-logo" />
        </Link>
      </p>
      <div className="navbar-menu">
        <a href="">Today's Deals</a>
        <a href="">Customer Srevice</a>
        <a href="">Registry</a>
        <a href="">Gift Cards</a>
        <a href="">Sell</a>
      </div>
      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
