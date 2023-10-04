'use client'
import addData from "@/firebase/firestore/addData";

function NewGame() {

    const addGame = async (e) => {
        e.preventDefault()
        const data = {
            name: e.target.email.value
        }
        const { result, error } = await addData('users', 'user-id', data)

        if (error) {
            return console.log(error)
        }
    }


    return (
        <>
            <form onSubmit={addGame}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name of game"
                /><br />
                <button type="submit">Add Game</button>
            </form>
        </>
    );
}

export default NewGame();