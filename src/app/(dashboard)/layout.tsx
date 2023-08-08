import React from 'react'
import NabBar from "@/app/(dashboard)/components/NabBar";
import '../globals.css'

const DashboardLayout = ({
    children,
                         }:{
    children: React.ReactNode
}) => {
    return (
        <>
            {children}
        </>
    )
}
export default DashboardLayout;
