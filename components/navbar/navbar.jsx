'use client'
import Link from 'next/link';
import styles from './navbar.module.css';
import { signOut } from 'next-auth/react';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link href="register" className={styles.link}><h2>Register</h2></Link>
            <Link href="login" className={styles.link}><h2>Login</h2></Link>
            <button className={styles.signOut} onClick={() => signOut()}>Log Out</button>
            <Image
                src='/HungryGuy.gif'
                alt='HungryGuy'
                width={640}
                height={64}
                className={styles.hungry} />
            <div className={styles.searchBar}>
                <input className={styles.searchInput} type='text' />
                <button className={styles.searchButton}>&#128269;</button>
            </div>
        </nav>
    )
}