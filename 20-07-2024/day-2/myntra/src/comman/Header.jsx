import React from 'react';
import logo from './../../public/images/logo.jpeg';
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { SlBag } from "react-icons/sl";



export default function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_T3uxOitGVezdGwt5vuSvnPguHDr0-xHEYg&s" alt="" width={120} height={120} /> */}
        <img src={logo} className='headerLogo' />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 myUl ">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Men</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Women</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Kids</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home & Living</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Beauty</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Studio <sup>New</sup> </a>
        </li>
        <li class="nav-item myInput ">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        </li>
       
        
      </ul>
      
        <div className='d-flex '>
            <div className=" text-center">
                <CiUser className='icon' />
                <h5>Profile</h5>
            </div>
            <div className="text-center">
                <CiHeart  className='icon'  />
                <h5>Wishlist</h5>
            </div>
            <div className="text-center">
                <SlBag  className='icon'  />
                <h5>Bag</h5>
            </div>
        </div>
    </div>
  </div>
</nav>
    </div>
  )
}
