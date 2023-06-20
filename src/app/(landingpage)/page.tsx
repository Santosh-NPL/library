import Image from 'next/image'
import Link from "next/link";


export default function Home() {
  return (
      <>
        <div>
          <nav>
            <ul>
              <li>
                <Link href="/check">Check it</Link>
              </li>
                <li>
                    <Link href="/dashboard">Dashboard it</Link>
                </li>
            </ul>
          </nav>
        </div>
      </>
  )
}
