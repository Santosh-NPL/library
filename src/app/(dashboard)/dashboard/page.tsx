import React from 'react'
import Link from "next/link";
import {BiHomeAlt} from "react-icons/bi";
import {BsCalendar2Date} from "react-icons/bs";
import Carousel from '@/app/(dashboard)/components/Carousel';
import Category from '@/app/(dashboard)/components/Category';
import Consumption from '@/app/(dashboard)/components/Consumption';
import Tickets from '@/app/(dashboard)/components/Tickets';
import URL from '@/app/(dashboard)/components/url';


export const metadata = {
    title: 'Dashboard | LMS'
}

const Page = () => {
    return (
            <section>
                <div>
                    <div className="bg-blue-50 rounded-lg">
                        <div className="pl-3 mb-10 pr-20">
                                <div className="w-full bg-white flex justify-between items-center px-5 py-3 rounded-lg shadow-md">
                                        <div className='flex items-center gap-x-5'>
                                            <div>
                                                <BiHomeAlt />
                                            </div>
                                            <div>
                                                <p>Home</p>
                                            </div>
                                        </div>
                                    <div className="flex items-center gap-x-5">
                                        <div className="">
                                        <BsCalendar2Date />
                                    </div>
                                        <div className="">
                                            {' '}
                                            <p>Ashar 5, 2080</p>
                                        </div>
                                    </div>
                                </div>
                        </div>

                        <div className="w-full pl-3">
                            <div className="grid grid-cols-12">
                                <div className="col-span-5  pr-3">
                                    <URL />
                                    <Consumption />
                                </div>
                                <div className="col-span-2  pb-5">
                                    <Category />
                                </div>

                                <div className="col-span-5  pr-20 pl-3">
                                    <Carousel />
                                    <Tickets />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <Link href="dashboard/payment">Payment system</Link>
            </section>

    )
}
export default Page
