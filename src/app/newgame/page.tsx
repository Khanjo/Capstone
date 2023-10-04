'use client'
import addData from "@/firebase/firestore/addData";

function NewGame() {

    const addGame = async () => {
        const data = {
            name: 'John snow'
        }
        const { result, error } = await addData('users', 'user-id', data)

        if (error) {
            return console.log(error)
        }
    }


    return (
        <>
            <form>
                <input
                    type="text"
                    name="name"
                    placeholder="Name of game"
                /><br />
                <button onClick={addGame} type="submit">Add Game</button>
            </form>
        </>
    );
}

export default NewGame();