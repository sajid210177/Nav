import React from 'react'
import { SlLocationPin } from "react-icons/sl";
const HeaderTop = () => {
  return (
    <div className='bg-accent border-b border-primary hidden sm:block'>

        <div className='container py-4'>

            <div className='flex justify-between items-center'>

            <div className='hidden lg:flex gap-1'>
             
             <div className=' text-white header_top__icon_wrapper pl-4 pt-1'>

             <SlLocationPin/>

             

             </div>
             <div className='text-secondary'>
                <p>3517 Washington. Gray Saint. Utica</p>
               
             </div>

             
             

             </div>
             <div className='flex gap-4'>
                
                <select className='text-grey text-[12px] w-[70px]'
                name='currency'
                id='currency'
                >

                    <option value="USD $">USD $</option>
                    <option value="EUR €">EUR €</option>
                    <option value="INR $">INR</option>

                </select>
                <select className='text-grey-500 text-[12px] w-[70px] '
                name='language'
                id='language'
                >
                    <option value="English">English</option>
                    <option value="French">French</option>
                    

                </select>

             </div>
             </div>
             </div>
    </div>
    
  );
};

export default HeaderTop;