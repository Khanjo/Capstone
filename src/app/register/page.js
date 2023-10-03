import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../firebase';
import styles from './page.module.css';
import Link from 'next/link';

export default function Register() {
    const [signUpSuccess, setSignUpSuccess] = useState(null);

    function signup(event) {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setSignUpSuccess(`You've successfully signed up, ${userCredential.user.email}!`)
            })
            .catch((error) => {
                setSignUpSuccess(`there was an error signing up: ${error.message}`)
            });
    }

    return (
        <>
            <h1>Register</h1>
            {signUpSuccess}
            <div className={styles.register}>
                <form onSubmit={signup}>
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
                        className={styles.button}
                    >
                        Register
                    </button>
                </form>
            </div>
            <p className={styles.registerText}>If you are already registered, please follow <Link href='login'>this link</Link></p>
        </>
    )
}