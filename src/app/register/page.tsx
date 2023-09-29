'use client'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../firebase';
import styles from './page.module.css';
import Link from 'next/link';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const signup = () => {
        createUserWithEmailAndPassword(auth, email, password)
    };

    return (
        <>
            <h1>Register</h1>

            <div className={styles.register}>
                <input
                    required
                    id='email'
                    type="email"
                    name="email"
                    placeholder='email'
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.inputs}
                /><br />
                <input
                    required
                    id='password'
                    type='password'
                    name='password'
                    placeholder='password'
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.inputs}
                /><br />
                <input
                    required
                    id='passwordConfirm'
                    type='password'
                    name='passwordConfirm'
                    placeholder='enter your password again'
                    autoComplete="current-password"
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    className={styles.inputs}
                /><br />
                <button
                    // disabled={(!email || !password || !passwordConfirm) || (password !== passwordConfirm)}
                    onClick={() => signup()}
                    className={styles.button}
                >
                    Register
                </button>
            </div>
            <p className={styles.registerText}>If you are already registered, please follow <Link href='login'>this link</Link></p>
        </>
    )
}