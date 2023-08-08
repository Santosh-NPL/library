import React, {useState} from 'react'
import {AiOutlineMenu} from "react-icons/ai";
import {FaYoutube} from "react-icons/fa";



const Header = () => {
    const [menu, setMenu] = useState(false);

   const navBar = () => {
       setMenu(!menu);
   }


    return (
        <div className=' w-full px-20 py-6'>
            <div className='flex items-center gap-x-7'>
                <div className="cursor-pointer text-[color:var(--medium-gray)] hover:text-[color:var(--dark-gray)]">
                    <AiOutlineMenu onClick={navBar} fontSize={`1.5em`} />
                </div>
                <div className="flex items-center gap-x-2">
                    <FaYoutube className='text-red-500' fontSize='2em' />
                    <p className='text-2xl'>Dashboard</p>
                </div>
            </div>
        </div>
    )
}
export default Header
