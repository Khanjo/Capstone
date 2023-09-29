'use client';
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Home() {
    const session = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/login');
        },
    });
    return (
        <main>
            <h1>Welcome to The Dojo</h1>
            <h2 className={styles.gameLink}><Link href="Games">Games</Link></h2>
            <Image
                src='/fighter.gif'
                alt='fighter'
                width={200}
                height={300}
                className={styles.fighter} />
        </main>
    )
}

Home.requireAuth = true
