import React from 'react'
import { BsSearch } from "react-icons/bs"
import { PiPhoneCallDuotone } from "react-icons/pi";
import { IoMdMail } from "react-icons/io";


const HeaderMain = () => {
  return (
    <div className=''>

    <div className=' bg-primary container py-4 sm:flex justify-between items-center'>
        <div className='font-bold text-4xl text-center text-white pl-6 sm:pb-0'>
            VIOLET

        </div>
        <div className='w-full sm:w-[300px] md:w-[70%] relative px-14 '>
            <input className='border-primary border p-2 px-4 rounded-lg w-full ' type="text" 
            placeholder=' Search Here..' 
            />
            <BsSearch className='absolute right-12 top-0 mr-3 mt-3 text-black size={20}'/>
            

        </div>
        <div className='hidden lg:flex gap-4 text-white text-[30px] pr-[28px]'>
            
            <PiPhoneCallDuotone/>
            <div className='text-[10px] pr-[20px]'>
                <p>Get Support</p>
                <p className='text-[13px] pr-14'>+44 757 7587 774</p>
            </div>
            
            <div className='relative right-14'>
                <IoMdMail/>
                <div className=' absolute  right-16 w-[18px] h-[18px] text-[12px]text-white grid place-items-center translate-x-1 -translate-y-1'>

                   <div className='text-[10px] pl-12'>
                    <p>Mail us</p>
                    <p className='pr-[10px]'>example@email.com</p>
                   </div>

                </div>
                


            </div>

        </div>
        
    </div>
  </div>
  )
}

export default HeaderMain;