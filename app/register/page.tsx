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

    const register = () => {
        createUserWithEmailAndPassword(auth, email, password)
    }

    return (
        <>
            <h1>Register</h1>

            <form className={styles.register}>
                <input
                    required
                    id='email'
                    type="email"
                    name="email"
                    placeholder='email'
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.inputs}
                /><br />
                <input
                    required
                    id='password'
                    type='password'
                    name='password'
                    placeholder='password'
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.inputs}
                /><br />
                <input
                    required
                    id='passwordConfirm'
                    type='password'
                    name='passwordConfirm'
                    placeholder='enter your password again'
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    className={styles.inputs}
                /><br />
                <button
                    disabled={(!email || !password || !passwordConfirm) || (password !== passwordConfirm)}
                    onClick={() => register()} className={styles.button}
                >
                    Register
                </button>
            </form>
            <p className={styles.registerText}>If you are not registered, please follow <Link href='register'>this link</Link></p>
        </>
    )
}