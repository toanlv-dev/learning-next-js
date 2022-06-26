import Link from 'next/link'

const Header = () => {
  return (
      <nav>
          <Link href="/"><a className="nav">Home</a></Link>
          <Link href="/about"><a className="nav">About</a></Link>
          <Link href="/contact"><a className="nav">Contact</a></Link>
      </nav>
  )
}

export default Header