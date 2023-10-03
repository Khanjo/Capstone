import React from "react";

function NewGame() {
    return (
        <React.Fragment>
            <form>
                <input
                    type="text"
                    name="name"
                    placeholder="Name of game"
                /><br />
                <button type="submit">Add Game</button>
            </form>
        </React.Fragment>
    );
}

export default NewGame();