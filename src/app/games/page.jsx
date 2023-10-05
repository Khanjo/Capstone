'use client'
import React, { useState, useEffect } from "react";
import styles from './page.module.css'
import Link from "next/link";
import { collection, addDoc } from "firebase/firestore";

export default function Games() {
    const [games, setGames] = useState([
        { name: 'Street Fighter', players: 8 },
        { name: 'Super Smash Bros.', players: 10 },
        { name: 'Dragonball Fighterz', players: 12 },
    ])

    const addGame = async (e) => {
        e.preventDefault();
    }

    return (
        <>
            <h1>Games</h1>
            <ul>
                {games.map((game, id) => (
                    <li key={id}>
                        <Link href={`games/${id}`}>{game.name}</Link>
                        <span>Players: ${game.players}</span>
                    </li>
                ))}
            </ul>
            <form>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Game Name" />
                <button onClick={addGame} className={styles.button} type="submit">Add Game</button>
            </form>

        </>
    )
}