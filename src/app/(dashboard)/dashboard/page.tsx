import React from 'react'
import Link from "next/link";


export const metadata = {
    title: 'Dashboard | LMS'
}

const Page = () => {
    return (
        <>
            <div>
                <h1>Dashboard</h1>
                <Link href="dashboard/payment">Payment system</Link>
            </div>

        </>
    )
}
export default Page
