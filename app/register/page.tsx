import styles from './page.module.css'
import Link from 'next/link'
import { useState, FormEvent } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

function Register() {
    const [signUpSuccess, setSignUpSuccess] = useState("");

    function doSignUp(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setSignUpSuccess(`You've successfully signed up, ${userCredential.user.email}!`)
            })
            .catch((error) => {
                setSignUpSuccess(`There was an error signing up: ${error.message}!`)
            });
    }

    return (
        <>
            <h1>Register</h1>

            <form className={styles.register}>
                <input
                    type="text"
                    name="email"
                    placeholder='email'
                    className={styles.inputs} /><br />
                <input
                    type='text'
                    name='password'
                    placeholder='password'
                    className={styles.inputs} /><br />
                <button type='submit' className={styles.button}>Register</button>
            </form>
            <p className={styles.loginText}>If you are already registered, please follow <Link href='login'>this link</Link></p>
        </>
    )
}