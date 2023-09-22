'use client'
import styles from './page.module.css'
import Link from 'next/link'
import React, { useState, FormEvent, useRef } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Register() {
    const [registerSuccess, setRegisterSuccess] = useState("");
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    function doRegister(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const email = emailRef.current?.value!;
        const password = passwordRef.current?.value!;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setRegisterSuccess(`You've successfully signed up, ${userCredential.user.email}!`)
            })
            .catch((error) => {
                setRegisterSuccess(`There was an error signing up: ${error.message}!`)
            });
    }

    return (
        <React.Fragment>
            <h1>Register</h1>
            {registerSuccess}
            <form className={styles.register} onSubmit={doRegister}>
                <input
                    required
                    ref={emailRef}
                    type="text"
                    name="email"
                    placeholder='email'
                    className={styles.inputs} /><br />
                <input
                    required
                    ref={passwordRef}
                    type='text'
                    name='password'
                    placeholder='password'
                    className={styles.inputs} /><br />
                <button type='submit' className={styles.button}>Register</button>
            </form>
            <p className={styles.loginText}>If you are already registered, please follow <Link href='login'>this link</Link></p>
        </React.Fragment>
    )
}

export default Register;