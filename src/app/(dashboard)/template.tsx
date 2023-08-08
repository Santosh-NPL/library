'use client'
import {ReactNode, useState} from "react";
import Header from '../(dashboard)/components/header';
import Sidebar from "@/app/(dashboard)/components/sidebar";
import Home from "@/app/(dashboard)/components/home";

import V2Header from '@/app/(dashboard)/components/dashboardv2/Header';
import V2SideNavbar from '@/app/(dashboard)/components/dashboardv2/SideNavbar';

import V1Header from '@/app/(dashboard)/components/v1/Header';
import V1SideNavbar from '@/app/(dashboard)/components/v1/Sidebar';

type Props = {
    children:ReactNode;
}

const Template = ({children}: Props) => {


    const [loading, setLoading] = useState(true);
    const [template, setTemplate] = useState('v1');


    switch (template) {
        case 'v1':
            return (
                <section>
                    <div>
                        <V1Header/>
                        <div className="w-full pl-12">
                            <div className="grid grid-cols-12">
                                <div className="col-span-2">
                                    <V1SideNavbar/>
                                </div>

                                <div className="col-span-9 ">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            );
        case 'v2':
            return (
                <section>
                    <div>
                        <V2Header/>
                        <div className="w-full pl-12">
                            <div className="grid grid-cols-12">
                                <div className="">
                                    <V2SideNavbar/>
                                </div>

                                <div className="col-span-11 ">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );

        case 'v3':

            return (
                <section>
                    <div>
                        <V2Header/>
                        <div className="w-full pl-12">
                            <div className="grid grid-cols-12">
                                <div className="">
                                    <V2SideNavbar/>
                                </div>

                                <div className="col-span-11 ">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );

        default:

            return (
                <section>
                    <div>

                        <Header/>
                        <div className="w-full pl-12">
                            <div className="grid grid-cols-12">
                                <div className="">
                                    <Sidebar/>
                                </div>

                                <div className="col-span-11 ">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );


    }


}

export default Template;
