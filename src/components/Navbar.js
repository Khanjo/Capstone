import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";

export default function Header() {
    return (
        <React.Fragment>
            <nav>
                <Link href="register"><h2>Register</h2></Link>
                <Link href="login"><h2>Login</h2></Link>
                <button onClick={() => signOut()}>Log Out</button>
                <div>
                    <input type='text' />
                    <button>&#128269;</button>
                </div>
            </nav>
        </React.Fragment>
    )
}

