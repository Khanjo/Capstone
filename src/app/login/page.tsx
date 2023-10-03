'use client'
import { auth } from '../../../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import styles from './page.module.css';
import Link from 'next/link';

export default function Login() {

    function doSignIn(event: any) {
        event.preventDefault();
        const email = event.target.signinEmail.value;
        const password = event.target.signinPassword;
        signInWithEmailAndPassword(auth, email, password)
    }

    return (
        <>
            <h1>Log In</h1>

            <form className={styles.login}>
                <input
                    required
                    type="email"
                    name="email"
                    placeholder='email'
                    className={styles.inputs}
                /><br />
                <input
                    required
                    type='password'
                    name='password'
                    placeholder='password'
                    className={styles.inputs}
                /><br />
                <button
                    onClick={doSignIn} className={styles.button}
                >
                    Login
                </button>
            </form>
            <p className={styles.loginText}>If you are not registered, please follow <Link href='register'>this link</Link></p>
        </>
    )
}