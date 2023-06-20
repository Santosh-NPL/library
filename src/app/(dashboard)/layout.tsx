import React from 'react'
import NabBar from "@/app/(dashboard)/components/NabBar";

const DashboardLayout = ({
    children,
                         }:{
    children: React.ReactNode
}) => {
    return (
        <>
            <div className="bg-red-500 full-width h-4">
                dashboard layout
            </div>
            <NabBar />
            {children}
        </>
    )
}
export default DashboardLayout;
