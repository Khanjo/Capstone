import React from "react";

function NewGame() {
    function addGame() {

    }

    return (
        <React.Fragment>
            <form>
                <input
                    type="text"
                    name="name"
                    placeholder="Name of game"
                /><br />
                <button onClick={addGame} type="submit">Add Game</button>
            </form>
        </React.Fragment>
    );
}

export default NewGame();