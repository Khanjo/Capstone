import styles from './page.module.css'

export default function Login() {
    return (
        <>
            <h1>Register</h1>

            <form className={styles.register}>
                <input type="text" name="email" placeholder='email' className={styles.inputs} /><br />
                <input type='text' name='password' placeholder='password' className={styles.inputs} /><br />
                <button type='submit' className={styles.button}>Register</button>
            </form>
        </>
    )
}