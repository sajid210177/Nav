import Link from 'next/link';
import React from 'react'
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";


const Navbar = () => {
  return (
    <div className='hidden lg:block'>
        <div className="container">
            <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-black">

            <Link className='relative group  transition-all  nabvar__link relative' href="#">
                <p className='flex cursor-pointer items-center gap-2 text-black group-hover:text-violet-500'>
                    <span>BROWSE CATAGORIES</span>
                    <IoIosArrowDown className=' rotate-180 transition-all group-hover:rotate-0'/>
                </p>
                {/* Dropdown */}
                <div className=' text-black absolute right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex'>
                  Hello
                </div>
                </Link>
                 
                <Link className='hover:text-violet-500 nabvar__link relative' href="#">
                Home
                </Link>
               
                <Link className='hover:text-violet-500 nabvar__link relative' href="#">
                All Products
                </Link>
                <Link className='hover:text-violet-500 nabvar__link relative' href="#">
                Vendor
                </Link>
                <Link className='hover:text-violet-500 nabvar__link relative' href="#">
                Offer
                </Link>
                <Link className='hover:text-violet-500 nabvar__link relative' href="#">
                Blog
                </Link>
                <Link className='hover:text-violet-500 nabvar__link relative' href="#">
                Pages
                </Link>
                <div className='hidden lg:flex gap-4 text-black pl-20'>
                  
                  <BiUser/>
                  <div className='relative '>
                <FiHeart/>
                <div className='bg-accent rounded-full absolute top-0 right-0 w-[10px] h-[10px] text-[12px]text-white grid place-items-center translate-x-1 -translate-y-1'>
                    
                </div>
               </div>
               <div className='relative '>
                <HiOutlineShoppingBag/>
                <div className='bg-accent rounded-full absolute top-0 right-0 w-[10px] h-[10px] text-[12px]text-white grid place-items-center translate-x-1 -translate-y-1'>

                </div>
               </div>
                </div>
               

            </div>
           
        </div>

    </div>
  )
}

export default Navbar;