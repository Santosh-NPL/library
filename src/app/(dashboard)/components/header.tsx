import React from 'react'
import { HiMenuAlt1 } from 'react-icons/hi'
import { BsPerson, BsWallet2, BsBook } from 'react-icons/bs'
import { CiHeadphones, } from 'react-icons/ci'
import { IoMdNotificationsOutline, } from 'react-icons/io'

const Header = () => {
    return (
        <div className="w-full px-20 py-10">
            <div className="flex justify-between">

                <div className="flex items-center justify-center gap-x-24">
                    <div className="text-3xl">
                        <HiMenuAlt1 />
                    </div>
                    <div className="">
                        <p className="font-bold text-2xl">IO TEAM</p>
                    </div>
                </div>

                <div className='flex gap-x-2'>


                    <div className="px-6 text-sm bg-blue-200 rounded-full text-black flex items-center justify-center">
                        <p>SN</p>
                    </div>

                    <div className="bg-gradient-to-t from-blue-500 to-blue-50 rounded-full p-3 text-xl text-white">
                       <BsPerson />
                    </div>
                    <div className="bg-gradient-to-t from-blue-500 to-blue-50 rounded-full p-3 text-xl text-white">
                        <BsWallet2 />
                    </div>
                    <div className="bg-gradient-to-t from-purple-500 to-purple-50 rounded-full p-3 text-xl text-white">
                        <CiHeadphones />
                    </div>
                    <div className="bg-gradient-to-t from-purple-500 to-purple-50 rounded-full p-3 text-xl text-white">
                        <BsBook />
                    </div>
                    <div className="bg-gradient-to-t from-red-500 to-red-50 rounded-full p-3 text-xl text-white">
                        <IoMdNotificationsOutline />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header
