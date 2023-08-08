import React from 'react';
import {AiFillSecurityScan} from "react-icons/ai";


const Header = () => {
    return (
        <div className='flex gap-x-2 items-center justify-start font-poppins w-full px-20 py-6'>
           <AiFillSecurityScan fontSize='30px' />
            <div className='text-2xl'>Dashboard V2</div>
        </div>
    )
}
export default Header
