'use client'
import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <Link href={"/"}>Home</Link>
        </div>
    )
}