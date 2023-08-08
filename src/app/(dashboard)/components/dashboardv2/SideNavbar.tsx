import React from 'react'
import {BsPlus, BsFillLightningFill, BsGearFill} from "react-icons/bs";
import { FaFire, FaGoogle, FaLinkedin, FaFacebook} from "react-icons/fa";
import {text} from "stream/consumers";

const SideNavbar = () => {
    return (
        <div>
            <div className="fixed h-screen w-16 m-0 flex flex-col text-white shadow-lg items-center">
                <SideBarIcon icon={<FaFire size="28" /> } text="Fire" />
                <SideBarIcon icon={<BsPlus size="28" /> } text={`Check it`} />
                <SideBarIcon icon={<BsFillLightningFill size="28" /> } text={`Check it`} />
                <SideBarIcon icon={<BsGearFill size="28" /> } text={`Check it`} />
                <SideBarIcon icon={<FaGoogle size="28" /> } text={`Check it`} />
                <SideBarIcon icon={<FaLinkedin size="28" /> } text={`Check it`} />
                <SideBarIcon icon={<FaFacebook size="28" /> } text={`Check it`} />
            </div>
        </div>
    )
}

const SideBarIcon = ({ icon, text = 'tooltip' }:{icon:any,text:string}) => {

   return(
       <div className="sidebar-icon group">
           {icon}

           <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
       </div>
   )

}

export default SideNavbar


