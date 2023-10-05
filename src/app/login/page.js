'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import styles from './page.module.css'
import Link from 'next/link';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const doSignIn = async (event) => {
        event.preventDefault();
        const { result, error } = await signIn(email, password);

        if (error) {
            return console.log(error)
        }
        console.log(result)
        return router.push("/")
    }

    return (
        <>
            <h1>Log In</h1>

            <form className={styles.login} onSubmit={doSignIn}>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    type="email"
                    name="email"
                    id="email"
                    placeholder='email'
                    className={styles.inputs}
                /><br />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    type='password'
                    name='password'
                    id="password"
                    placeholder='password'
                    className={styles.inputs}
                /><br />
                <button type='submit' className={styles.button}>Login</button>
            </form>
            <p className={styles.loginText}>If you are not registered, please follow <Link href='register'>this link</Link></p>
        </>
    )
}

export default Login;