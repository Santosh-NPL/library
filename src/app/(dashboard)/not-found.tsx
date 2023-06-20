import Link from 'next/link'

const NotFound = () => {
    return (
        <div>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <p>
                view <Link href='/dashboard'>Dashboard</Link>
            </p>
        </div>
    )
}
export default NotFound
