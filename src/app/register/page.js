'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { signUp } from '../../firebase/auth/signup'
import styles from './page.module.css'
import Link from 'next/link';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const doSignUp = async (e) => {
        e.preventDefault();
        const { result, error } = await signUp(email, password);
        console.log(email, password)
        if (error) {
            return console.log(error)
        }
        console.log(result)
        return router.push("/")
    }

    return (
        <>
            <h1>Register</h1>

            <div>
                <form className={styles.register} >
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        type="email"
                        name="email"
                        id="email"
                        placeholder='Email'
                        className={styles.inputs}
                    /><br />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        type='password'
                        name='password'
                        id="password"
                        placeholder='Password'
                        className={styles.inputs}
                    /><br />
                    <button type='submit' onClick={doSignUp}>Register</button>
                </form>
                <p className={styles.registerText}>If you are already registered, please follow <Link href='login'>this link</Link></p>
            </div>
        </>
    )
}

export default Register;