import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
    return (
        <main>
            <h1>Welcome to The Dojo</h1>
            <h2 className={styles.gameLink}><Link href="Games">Games</Link></h2>
        </main>
    )
}