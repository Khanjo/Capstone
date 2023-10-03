'use client'
import { useState } from 'react';
import { signIn } from 'next-auth/react'
import styles from './page.module.css';
import Link from 'next/link';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <h1>Log In</h1>

            <form className={styles.login}>
                <input
                    required
                    type="email"
                    name="email"
                    placeholder='email'
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.inputs}
                /><br />
                <input
                    required
                    type='password'
                    name='password'
                    placeholder='password'
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.inputs}
                /><br />
                <button
                    disabled={!email || !password}
                    onClick={() => signIn('credentials', { email, password, redirect: true, callbackUrl: '/' })} className={styles.button}
                >
                    Login
                </button>
            </form>
            <p className={styles.loginText}>If you are not registered, please follow <Link href='register'>this link</Link></p>
        </>
    )
}