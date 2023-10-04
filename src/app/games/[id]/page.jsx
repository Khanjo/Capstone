import React from "react";
import styles from './page.module.css'

export default function Games() {

    return (
        <>
            <h1>Games</h1>
            <form>
                <input
                    className={styles.input}
                    type="text" />

            </form>
        </>
    )
}