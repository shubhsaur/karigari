import React from 'react'
import logo from "../resources/logo.png";
import hamburger from "../resources/icons/Group 49.svg"
import searchIcon from "../resources/icons/ion_search-outline.svg"
import wishlistIcon from "../resources/icons/clarity_heart-line.svg"
import cartIcon from "../resources/icons/ph_shopping-cart-simple-light.svg"
import profileIcon from "../resources/icons/line-md_account.svg"

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-4 bg-[#FFE7CD] h-[100px]'>
        <div className='flex items-center gap-2'>
          <img className='mb-8 lg:hidden md:hidden' src={hamburger} alt="hamburger menu icon" />
          <img className='w-[78px]' src={logo} alt="karigari logo" />
        </div>
        <div className='flex gap-4'>
          <img src={searchIcon} alt="search icon" />
          <img src={wishlistIcon} alt="wishlist icon" />
          <img src={cartIcon} alt="cart icon" />
          <img src={profileIcon} alt="profile icon" />
        </div>
    </div>
  )
}

export default Navbar;