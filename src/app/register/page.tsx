'use client'
import { useState } from 'react';
import { signIn } from 'next-auth/react'
import styles from './page.module.css';
import Link from 'next/link';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    return (
        <>
            <h1>Log In</h1>

            <form className={styles.login}>
                <input
                    required
                    type="email"
                    name="email"
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.inputs}
                /><br />
                <input
                    required
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.inputs}
                /><br />
                <input
                    required
                    type='password'
                    name='passwordConfirm'
                    placeholder='Confirm Password'
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.inputs}
                /><br />
                <button
                    disabled={!email || !password || passwordConfirm != password}
                    onClick={() => signIn('credentials', { email, password, redirect: true, callbackUrl: '/' })} className={styles.button}
                >
                    Login
                </button>
            </form>
            <p className={styles.registerText}>If you are already registered, please follow <Link href='login'>this link</Link></p>
        </>
    )
}