"use client"


import Image from "next/image";
import React, { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";
import { RiShoppingCartLine } from "react-icons/ri";
import { CgMenu } from "react-icons/cg";
import styled from "styled-components";




const Navbar = () => {
   const [showNav, setShowNav] = useState(false);


    const handleClick = () => {
      setShowNav(!showNav);
      console.log(showNav)
    }

  return (
    <section className='w-[92%] max-w-[100rem] m-auto mt-6 flex items-center justify-between'>
      <div className='flex gap-8 items-center'>
        <div>
          <Image
            width={150}
            height={70}
            src='/images/eduLogo.png'
            className='w-[100px] md:w-[120px]'
            alt=''
          />
        </div>

        <div className='lg:flex gap-2 text-zinc-600 mt-1 items-center font-medium cursor-pointer text-[16px] hover:text-blue-700 hidden'>
          {" "}
          <CgMenuGridO className='text-[25px]' />
          Category
        </div>
      </div>

      <div className='flex item-center gap-5 '>
        <div className='hidden xl:block  w-[600px]'>
          <ul className='flex gap-[6%] font-medium text-[16px] text-zinc-600 mt-4'>


            <HoverLI className='cursor-pointer hover:text-blue-700 flex items-center relative'>
              Home
              <RiArrowDropDownLine className='text-2xl' />
              <ul className='absolute bg-gray-50 rounded-md w-32 text-center text-[14px] text-zinc-600 -left-10 top-10 z-10 hidden'>
                <li className='py-2 cursor-pointer hover:text-white hover:bg-blue-600 hover:rounded-md'>
                  Home Style 1
                </li>
                <hr />
                <li className='py-2 cursor-pointer hover:text-white hover:bg-blue-600 hover:rounded-md'>
                  Home Style 2
                </li>
                <hr />
                <li className='py-2 cursor-pointer hover:text-white hover:bg-blue-600 hover:rounded-md'>
                  Home Style 3
                </li>
              </ul>
            </HoverLI>
            
             <HoverLI className='cursor-pointer hover:text-blue-700 flex items-center relative'>
              Courses
              <RiArrowDropDownLine className='text-2xl' />
              <ul className='absolute bg-gray-50 rounded-md w-36 text-[14px] text-zinc-600 -left-5 top-10 z-10 hidden'>
                <li className='py-2 pl-4 cursor-pointer hover:text-white hover:bg-blue-600 hover:rounded-md'>
                  Courses
                </li>
                <hr />  
                <li className='py-2 pl-4 cursor-pointer hover:text-white hover:bg-blue-600 hover:rounded-md'>
                Courses List
                </li>
                <hr />
                <li className='py-2 pl-4 cursor-pointer hover:text-white hover:bg-blue-600 hover:rounded-md'>
                Courses Sidebar
                </li>
                <hr />
                <li className='py-2 pl-4  cursor-pointer hover:text-white hover:bg-blue-600 hover:rounded-md'>
                Courses Details
                </li>
              </ul>
             </HoverLI>
             
             <HoverLI className='cursor-pointer hover:text-blue-700 flex items-center relative'>
              Blog
              <RiArrowDropDownLine className='text-2xl' />
              <ul className='absolute bg-gray-50 rounded-md w-36 text-[14px] text-zinc-600 -left-5 top-10 z-10 hidden'>
                <li className='py-2 pl-4 cursor-pointer hover:text-white hover:bg-blue-600 hover:rounded-md'>
                  Blog
                </li>
                <hr />  
                <li className='py-2 pl-4 cursor-pointer hover:text-white hover:bg-blue-600 hover:rounded-md'>
                Blog Details
                </li>
                <hr />
              </ul>
            </HoverLI>
            
            <HoverLI className='cursor-pointer hover:text-blue-700 flex items-center relative'>
              Pages
              <RiArrowDropDownLine className='text-2xl' />
              <ul className='absolute bg-gray-50 rounded-md w-40 text-[14px] text-zinc-600 -left-5 top-10 z-40 hidden'>
                <li className='py-2 pl-4 cursor-pointer hover:text-white hover:bg-blue-600 hover:rounded-md'>
                  About
                </li>
                <hr />  
                <li className='py-2 pl-4 cursor-pointer hover:text-white hover:bg-blue-600 hover:rounded-md'>
                 Instructor
                </li>
                <hr />
                <li className='py-2 pl-4 cursor-pointer hover:text-white hover:bg-blue-600 hover:rounded-md'>
                Instructor Details
                </li>
                <hr />
                <li className='py-2 pl-4  cursor-pointer hover:text-white hover:bg-blue-600 hover:rounded-md'>
                Event Details
                </li>
                <hr />
                <li className='py-2 pl-4  cursor-pointer hover:text-white hover:bg-blue-600 hover:rounded-md'>
                 My Cart
                </li>
                <hr />
                <li className='py-2 pl-4  cursor-pointer hover:text-white hover:bg-blue-600 hover:rounded-md'>
                 Checkout
                </li>
                <hr />
                <li className='py-2 pl-4  cursor-pointer hover:text-white hover:bg-blue-600 hover:rounded-md'>
                Sign In
                </li>
                <hr />
                <li className='py-2 pl-4  cursor-pointer hover:text-white hover:bg-blue-600 hover:rounded-md'>
                 Sign Up
                </li>
                <hr />
                <li className='py-2 pl-4  cursor-pointer hover:text-white hover:bg-blue-600 hover:rounded-md'>
                 Error
                </li>
              </ul>
            </HoverLI>
            <li className='cursor-pointer hover:text-blue-700'>Contact</li>
          </ul>
        </div>




        <div className='bg-white md:flex hidden p-3 rounded-md gap-3'>
          <BiSearchAlt className='text-2xl text-zinc-700 hover:text-blue-800' />
          <input
            type='text'
            placeholder='Search...'
            className='focus:outline-none pl-3 border-r-[1px] border-gray-400'
          />
          <RiShoppingCartLine className='text-2xl text-zinc-700 hover:text-blue-800' />
        </div>

        <div className='border-2 py-3 text-center rounded-lg bg-blue-700 text-white cursor-pointer hover:bg-blue-800  px-4 hidden md:block'>
          Try for free
        </div>


        <div className='block lg:hidden  text-3xl mt-1 mr-5' onClick={handleClick}>
           <CgMenu />
        </div>
        {showNav ? <ul className='block lg:hidden md:transition-all md:duration-700 md:ease-in flex-col px-20 text-center text bg-slate-300 text-lg font-medium py-4 rounded-md absolute z-50 md:right-10 md:top-24 sm:right-5 sm:top-20 top-[10%] right-[5%]'>
            <li className='py-3 hover:text-blue-700 cursor-pointer'>
              Home
            </li><hr />
            <li className='py-3 hover:text-blue-700  cursor-pointer '>
              Courses
            </li><hr />
            <li className='py-3 hover:text-blue-700  cursor-pointer '>
              Blog
            </li><hr />
            <li className='py-3 hover:text-blue-700  cursor-pointer'>
              Pages
            </li><hr />
            <li className='py-3 hover:text-blue-700  cursor-pointer'>
              Contact
            </li>
          </ul> : ""}
        
        </div> 
    </section>
  );
};

export default Navbar;


const HoverLI = styled.li`
&:hover{
  ul{
    display: block;
  }
}
`;
