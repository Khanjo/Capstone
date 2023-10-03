'use client'
import styles from './page.module.css';
import Link from 'next/link';
import { auth } from '../../../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Login() {

    function doSignUp(event: any) {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(auth, email, password)
    }

    return (
        <>
            <h1>Register</h1>

            <form className={styles.register} onSubmit={doSignUp}>
                <input
                    required
                    type="email"
                    name="email"
                    placeholder='Email'
                    className={styles.inputs}
                /><br />
                <input
                    required
                    type='password'
                    name='password'
                    placeholder='Password'
                    className={styles.inputs}
                /><br />
                <input
                    required
                    type='password'
                    name='passwordConfirm'
                    placeholder='Confirm Password'
                    className={styles.inputs}
                /><br />
                <button

                    type='submit'
                    className={styles.button}>
                    Register
                </button>
            </form>
            <p className={styles.registerText}>If you are already registered, please follow <Link href='login'>this link</Link></p>
        </>
    )
}