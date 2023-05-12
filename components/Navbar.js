import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className="container">
      <nav className='navbar'>
        <Image src="/rupee.png" width={50} height={48} />
        <h1 className='joe'>JoeGakumo Vybes</h1>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/guides">Guides</Link></li>
        </ul>
      </nav>
      <div className="banner">
        <Image src="/banner.png" width={1800} height={276} />
      </div>
    </div>
  )
}
