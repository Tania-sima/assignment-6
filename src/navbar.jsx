import React from 'react';
import cartIcon from "./assets/products/shopping-cart.png"

const Navbar = ({count}) => {
  

    return (
      <div  className="navbar bg-white px-12 md:px-30 py-3 shadow-sm sticky top-0 z-50">
  <div className="navbar-start">
    <a className="text-2xl font-extrabold  text-[#717eb8] bg-gradient-to-r from-blue-700 to-purple-800 bg-clip-text text-transparent cursor-pointer">DigiTools</a>
  
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden px-1">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow transition">
        <li className="hover:text-blue-600 transition"><a>Products</a></li>
        <li className="hover:text-blue-600 transition"><a>Features</a></li>
       <li className="hover:text-blue-600 transition"><a>Pricing</a></li>
       <li className="hover:text-blue-600 transition"><a>Testimonials</a></li>
      <li className="hover:text-blue-600 transition"><a>FAQ</a></li>
        </ul>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className="hover:text-blue-600 transition"><a>Products</a></li>
        <li className="hover:text-blue-600 transition"><a>Features</a></li>
       <li className="hover:text-blue-600 transition"><a>Pricing</a></li>
       <li className="hover:text-blue-600 transition"><a>Testimonials</a></li>
      <li className="hover:text-blue-600 transition"><a>FAQ</a></li>
    </ul>
  
  </div>
  

       <div className="navbar-end space-x-2 md:space-x-4">
 
   <button  className="btn btn-ghost btn-circle" >

           <div className="indicator">
             <img src={cartIcon} alt="Cart Icon" className="w-6 h-6 object contain"/>
              {count>0?
              
              <span className="badge badge-sm indicator-item text-white font-bold rounded-full bg-red-600">  {count}</span>:
              <span></span>
              }
          
          </div>
        </button>

    
       
        <button className="btn btn-ghost font-semibold text-gray-700 hidden sm:inline-flex">Login</button>
        <button className="btn bg-gradient-to-r from-blue-700 to-purple-800 hover:bg-[#2057DD] text-white border-none px-8 rounded-full normal-case font-medium text-sm">
          Get Started
        </button>
      </div>
            </div>

      
    );
};

export default Navbar;



 