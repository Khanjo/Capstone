import Link from 'next/link'
import styles from './navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link href="register"><h2>Register</h2></Link>
            <Link href="login"><h2>Login</h2></Link>
            <div className={styles.searchBar}>
                <input className={styles.searchInput} type='text' />
                <button className={styles.searchButton}>&#128269;</button>
            </div>
        </nav>
    )
}