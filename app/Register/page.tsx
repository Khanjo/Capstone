import styles from '../page.module.css'

export default function Login() {
    return (
        <>
            <main>
                <h1>Register</h1>

                <form>
                    <input type="text" name="email" placeholder='email' />
                    <input type='text' name='password' placeholder='password' />
                    <button type='submit'>Register</button>
                </form>
            </main>
        </>
    )
}