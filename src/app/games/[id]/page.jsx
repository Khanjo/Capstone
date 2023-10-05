'use client'
import React, { useState, useEffect } from "react";
import styles from './page.module.css'
import { collection, getDoc } from "firebase/firestore";

export default function Page() {
    const [players, setPlayer] = useState([
        { email: 'johndoe@getMaxListeners.com', rank: 986 },
        { email: 'janedoe@getMaxListeners.com', rank: 952 },
        { email: 'giogio@getMaxListeners.com', rank: 867 },
        { email: 'floridaman@getMaxListeners.com', rank: 645 },
    ])

    return (
        <>
            <h1>Game Name</h1>

            <ol className={styles.leaderboard}>
                {players.map((player, id) => (
                    <li key={id} className={styles.player}>
                        <span>{player.email}</span>
                        <span className={styles.rank}>{player.rank}</span>
                    </li>
                ))}
            </ol>
        </>
    )
}