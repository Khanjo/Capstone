'use client';
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
    return (
        <main>
            <h1>Welcome to The Dojo</h1>
            <h2 className={styles.gameLink}><Link href="games" className={styles.link}>Games</Link></h2>
            <div className={styles.fighters}>
                <Image
                    src='/fighter.gif'
                    alt='fighter'
                    width={200}
                    height={300}
                    className={styles.fighter1} />
                <Image
                    src='/fighter2.gif'
                    alt='fighter'
                    width={200}
                    height={300}
                    className={styles.fighter2} />
            </div>
        </main>
    )
}
