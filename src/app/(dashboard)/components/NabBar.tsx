import React from 'react'
import Link from 'next/link'

const NabBar = () => {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link href="dashboard/payment">Payment</Link>

                </li>
                <li>
                    <Link href="/dashboard">Dashboard</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}
export default NabBar
