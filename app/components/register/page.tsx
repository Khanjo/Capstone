import styles from './page.module.css'
import Link from 'next/link'

export default function Register() {
    return (
        <>
            <h1>Register</h1>

            <form className={styles.register}>
                <input type="text" name="email" placeholder='email' className={styles.inputs} /><br />
                <input type='text' name='password' placeholder='password' className={styles.inputs} /><br />
                <button type='submit' className={styles.button}>Register</button>
            </form>
            <p className={styles.loginText}>If you are already registered, please follow <Link href='login'>this link</Link></p>
        </>
    )
}