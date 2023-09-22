import styles from './page.module.css'
import Link from 'next/link'

export default function Login() {
    return (
        <>
            <h1>Login</h1>

            <form className={styles.login}>
                <input type="text" name="email" placeholder='email' className={styles.inputs} /><br />
                <input type='text' name='password' placeholder='password' className={styles.inputs} /><br />
                <button type='submit' className={styles.button}>Login</button>
            </form>
            <p className={styles.registerText}>If you are not registered, please follow <Link href='register'>this link</Link></p>
        </>
    )
}