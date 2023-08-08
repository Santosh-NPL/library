'use client'
import Image from 'next/image'
import Link from "next/link";
import {useRouter} from "next/navigation";


export default function Home() {
    const router = useRouter();
  return (
      <>
        <div>
          <nav>
            <ul>
              <li>
                <Link href="/check">Check it</Link>
              </li>
                <li>
                    <button onClick={()=> router.push('/dashboard')}>Dashboard</button>
                </li>
            </ul>
          </nav>
        </div>
      </>
  )
}
