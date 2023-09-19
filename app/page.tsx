import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <nav>
        <Link href="Register"><h2>Register</h2></Link>
      </nav>
      <h1>Welcome to The Dojo</h1>
    </main>
  )
}
