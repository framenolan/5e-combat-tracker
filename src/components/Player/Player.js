import './Player.css'
import { useState } from 'react'

function Player() {

    const [playerName, setPlayerName] = useState("Player Name")
    const [currentHP, setCurrentHP] = useState("100")

    return (
        <card className='Player'>
            <h2>{playerName}</h2>
            <form>
                <input
                    type="text"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                />
                <input
                    type="text"
                    value={currentHP}
                    onChange={(e) => setCurrentHP(e.target.value)}
                />
            </form>
        </card>
    )
}

export default Player;